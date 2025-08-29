// Enhanced middleware for company-specific authentication supporting both JWT and Basic Auth
// Usage: app.use(authenticateCompany)

const jwt = require('jsonwebtoken');
const companies = {
  'companyA': 'passwordA',
  'companyB': 'passwordB',
};

function authenticateCompany(req, res, next) {
  const auth = req.headers.authorization;
  
  if (!auth) {
    res.set('WWW-Authenticate', 'Basic realm="Company Area"');
    return res.status(401).send('Authentication required.');
  }

  // Check for JWT Bearer token first
  if (auth.startsWith('Bearer ')) {
    try {
      const token = auth.split(' ')[1];
      const decoded = jwt.verify(token, 'your-secret-key');
      req.user = decoded;
      return next();
    } catch (err) {
      return res.status(401).send('Invalid or expired token.');
    }
  }

  // Fall back to Basic Auth
  if (auth.startsWith('Basic ')) {
    try {
      const base64 = auth.split(' ')[1];
      const [user, pass] = Buffer.from(base64, 'base64').toString().split(':');
      if (companies[user] && companies[user] === pass) {
        req.company = user;
        return next();
      }
      res.set('WWW-Authenticate', 'Basic realm="Company Area"');
      return res.status(401).send('Invalid credentials.');
    } catch (err) {
      res.set('WWW-Authenticate', 'Basic realm="Company Area"');
      return res.status(401).send('Malformed authentication header.');
    }
  }

  res.set('WWW-Authenticate', 'Basic realm="Company Area"');
  return res.status(401).send('Invalid authentication method.');
}

module.exports = authenticateCompany;
