 HEAD
# 🛒 Product Cart

A modern, intuitive product management platform built with React and Node.js. Streamline your product creation, organization, and documentation with our user-friendly interface and PDF export capabilities.

## ✨ Features

- **🚀 Lightning Fast**: Create and manage products in seconds
- **📊 Smart Organization**: Automatic categorization and efficient organization
- **📄 PDF Export**: Generate professional PDF summaries for all products
- **🔒 Secure & Reliable**: Robust backend infrastructure
- **📱 Responsive Design**: Works perfectly on all devices
- **🎨 Modern UI**: Beautiful, intuitive user interface

## 🏗️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **React Router** - Client-side routing
- **CSS3** - Modern styling with animations and responsive design
- **jsPDF** - PDF generation capabilities

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication and authorization

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/product-cart.git
   cd product-cart
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/product_cart
   JWT_SECRET=your-secret-key-here
   PORT=5000
   ```

5. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   ```

6. **Start the backend server**
   ```bash
   cd backend
   npm start
   # or for development
   nodemon server.js
   ```

7. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

8. **Open your browser**
   Navigate to `http://localhost:3000`

## 📱 Usage

### Creating Products

1. **Navigate to Create Product** from the header
2. **Step 1**: Fill in basic product details
   - Product name
   - Category selection
   - Price
3. **Step 2**: Add category-specific specifications
   - Electronics: Warranty, Brand, Model
   - Apparel: Size, Color, Material
   - Home & Garden: Dimensions, Weight, Material
   - Sports: Sport Type, Skill Level, Age Group
   - Books: Author, ISBN, Pages
4. **Step 3**: Review and submit
   - Review all information
   - Submit to create product
   - Choose to download PDF summary

### Navigation

- **🛒 Logo**: Click to return to home page
- **➕ Create Product**: Start creating a new product
- **ℹ️ About**: Learn more about Product Cart

## 🏗️ Project Structure

```
product-cart/
├── backend/                 # Backend server
│   ├── models/             # MongoDB models
│   ├── server.js           # Main server file
│   ├── authenticateCompany.js # Authentication middleware
│   └── package.json
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── MultiStepForm.tsx
│   │   │   ├── StepOne.tsx
│   │   │   ├── StepTwo.tsx
│   │   │   ├── StepThree.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── About.tsx
│   │   │   └── Login.tsx
│   │   ├── context/        # React context
│   │   ├── routes/         # Routing configuration
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   └── utils/          # Utility functions
│   └── package.json
└── README.md
```

## 🔧 Configuration

### Backend Configuration

The backend server runs on port 5000 by default. You can change this in `backend/server.js`:

```javascript
const PORT = process.env.PORT || 5000;
```

### Frontend Configuration

The frontend runs on port 3000 and connects to the backend on port 5000. Update the API base URL in `frontend/src/services/api.ts` if needed:

```typescript
const api = axios.create({
  baseURL: 'http://localhost:5000', // Change this for production
  withCredentials: false,
});
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)

1. **Build the project**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Vercel will auto-detect React settings
   - Build command: `npm run build`
   - Output directory: `build`

3. **Deploy to Netlify**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `build`

### Backend (Railway/Render)

1. **Deploy to Railway**
   - Connect your GitHub repository
   - Select the backend folder
   - Add environment variables
   - Deploy

2. **Deploy to Render**
   - Connect your GitHub repository
   - Select the backend folder
   - Configure environment variables
   - Deploy

## 🔒 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/product_cart
JWT_SECRET=your-secret-key-here
PORT=5000
NODE_ENV=development
```

### Frontend
Update the API base URL in `src/services/api.ts` to point to your deployed backend.

## 📊 API Endpoints

### Products
- `GET /products` - Get all products
- `POST /products` - Create a new product

### Authentication
- `POST /auth/login` - User login
- `POST /auth/register` - User registration

### Questions & Reports
- `GET /questions` - Get all questions
- `POST /questions` - Create a new question
- `GET /reports` - Get all reports
- `POST /reports` - Create a new report

## 🎨 Customization

### Styling
- Modify CSS files in each component directory
- Update color schemes in CSS variables
- Customize animations and transitions

### Categories
- Add new product categories in `StepTwo.tsx`
- Define category-specific questions
- Update the `CATEGORY_QUESTIONS` object

### PDF Generation
- Customize PDF layout in `generateProductPDF.ts`
- Modify PDF styling and content
- Add company branding

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check connection string in environment variables

2. **Port Already in Use**
   - Change port in backend configuration
   - Kill processes using the port

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

4. **API Connection Issues**
   - Verify backend server is running
   - Check CORS configuration
   - Verify API base URL in frontend

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Development Team** - Expert developers crafting robust solutions
- **Design Team** - Creative designers ensuring beautiful UX
- **Product Team** - Product managers focused on user value

## 📞 Support

- **Email**: info@productcart.com
- **Phone**: +1 (555) 123-4567
- **Website**: www.productcart.com

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- jsPDF for PDF generation capabilities
- All contributors and users of Product Cart

---

**Made with ❤️ by the Product Cart Team**

*Empowering businesses to manage their products efficiently and professionally*
"#  Product_Cart_App"   
# Product_Cart_App
 fd3723df9e90000f4de2dcae979ed29acb08597e
