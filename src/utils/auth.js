const jwt = require('jsonwebtoken');

const SECRET_KEY = 'xxxxxxxxxx'; 

const verifyTokenAndGetRole = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded.role;
  } catch (error) {
    return null; 
  }
};

module.exports = { verifyTokenAndGetRole };
