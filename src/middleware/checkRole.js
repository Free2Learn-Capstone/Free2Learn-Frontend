const { verifyTokenAndGetRole } = require('@/utils/auth');
const ROLES = require('@/config/roles');

const checkRole = (roles) => (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Token missing' });
  }

  const userRole = verifyTokenAndGetRole(token);

  if (!userRole || !roles.includes(userRole)) {
    return res.status(403).json({ error: 'Unauthorized' });
  }

  req.userRole = userRole;

  return next();
};

module.exports = checkRole;
