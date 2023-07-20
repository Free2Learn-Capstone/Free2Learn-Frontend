import jwt, { JwtPayload } from 'jsonwebtoken';

const SECRET_KEY: string = process.env.JWT_SECRET_KEY || ''; 

const verifyTokenAndGetRole = (token: string): string | null => {
  try {
    const decoded: JwtPayload = jwt.verify(token, SECRET_KEY) as JwtPayload;
    return decoded.role || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { verifyTokenAndGetRole };


