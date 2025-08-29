const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const authenticateCompany = require('./authenticateCompany');
const jwt = require('jsonwebtoken'); // Added for authentication endpoints

const app = express();

app.use(cors());
app.use(express.json());

// --- MONGOOSE MODELS ---
const mongoose = require('mongoose');
const Product = require('./models/Product');
const Question = require('./models/Question');
const Report = require('./models/Report');

// Connect Mongoose (does not affect native driver)
mongoose.connect('mongodb://localhost:27017/db1', { useNewUrlParser: true, useUnifiedTopology: true });

// --- MONGOOSE ENDPOINTS ---
// Products (Mongoose)
app.get('/mongoose/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products (mongoose)', error: err });
  }
});

app.post('/mongoose/products', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ id: product._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create product (mongoose)', error: err });
  }
});

// Questions (Mongoose)
app.get('/mongoose/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch questions (mongoose)', error: err });
  }
});

app.post('/mongoose/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json({ id: question._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create question (mongoose)', error: err });
  }
});

// Reports (Mongoose)
app.get('/mongoose/reports', async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reports (mongoose)', error: err });
  }
});

app.post('/mongoose/reports', async (req, res) => {
  try {
    const report = new Report(req.body);
    await report.save();
    res.status(201).json({ id: report._id });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create report (mongoose)', error: err });
  }
});
 

// Apply authentication to all /products endpoints
// app.use('/products', authenticateCompany); // COMMENTED OUT

// --- AUTHENTICATION ENDPOINTS ---
// User login
app.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple authentication logic - you can enhance this
    if (username === 'admin' && password === 'password') {
      const token = jwt.sign({ username }, 'your-secret-key', { expiresIn: '1h' });
      res.json({ token, username });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err });
  }
});

// User registration
app.post('/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple registration logic - you can enhance this
    if (username && password) {
      res.status(201).json({ message: 'User registered successfully', username });
    } else {
      res.status(400).json({ message: 'Username and password are required' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err });
  }
});

const PORT = 5000;
let productsCollection, questionsCollection, reportsCollection;

// Connect to MongoDB and set up the products collection

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('db1');
    productsCollection = db.collection('products');
    questionsCollection = db.collection('questions');
    reportsCollection = db.collection('reports');
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
// --- QUESTIONS ENDPOINTS ---
// Get all question templates
app.get('/questions', async (req, res) => {
  try {
    const questions = await questionsCollection.find({}).toArray();
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch questions', error: err });
  }
});

// Add a new question template
app.post('/questions', async (req, res) => {
  try {
    const question = req.body;
    const result = await questionsCollection.insertOne(question);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create question', error: err });
  }
});

// --- REPORTS ENDPOINTS ---
// Get all reports
app.get('/reports', async (req, res) => {
  try {
    const reports = await reportsCollection.find({}).toArray();
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reports', error: err });
  }
});

// Add a new report
app.post('/reports', async (req, res) => {
  try {
    const report = req.body;
    const result = await reportsCollection.insertOne(report);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create report', error: err });
  }
});

// Remove authentication middleware - products can be accessed without auth
// app.use('/products', authenticateCompany); // COMMENTED OUT

// Test authentication endpoint (optional - you can remove this too)
app.get('/test-auth', authenticateCompany, (req, res) => {
  res.json({ 
    message: 'Authentication successful!', 
    user: req.user || req.company,
    authType: req.user ? 'JWT' : 'Basic'
  });
});

// --- AUTHENTICATION ENDPOINTS ---

// Route to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await productsCollection.find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch products', error: err });
  }
});

// Route to create a new product
app.post('/products', async (req, res) => {
  console.log('POST /products called. Body:', req.body);
  try {
    const product = req.body;
    const result = await productsCollection.insertOne(product);
    console.log('Product inserted with _id:', result.insertedId);
    res.status(201).json({ id: result.insertedId });
  } catch (err) {
    console.error('Error inserting product:', err);
    res.status(500).json({ message: 'Failed to create product', error: err });
  }
});
