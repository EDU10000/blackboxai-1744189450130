const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    // Get token from header
    const token = req.header('Authorization').replace('Bearer ', '');
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user to request
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

module.exports = auth;
