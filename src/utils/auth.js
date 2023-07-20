const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY; 

const verifyTokenAndGetRole = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded.role;
  } catch (error) {
    console.error(error)
    return null; 
  }
};

module.exports = { verifyTokenAndGetRole };
