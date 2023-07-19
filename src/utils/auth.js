const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET_KEY; 

const verifyTokenAndGetRole = (token) => {
  console.log(process.env.JWT_SECRET_KEY)
  console.log(SECRET_KEY)
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded.role;
  } catch (error) {
    console.error(error)
    return null; 
  }
};

module.exports = { verifyTokenAndGetRole };
