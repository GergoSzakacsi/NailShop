import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const { JWT_SECRET } = process.env;

if (!JWT_SECRET) {
  console.error('JWT_SECRET is not defined in the environment variables.');
  process.exit(1);
}

console.log('JWT_SECRET:', JWT_SECRET);

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    console.log('Token to verify:', token);
    const decoded = jwt.verify(token, JWT_SECRET, { algorithm: 'HS256' });
    console.log('Decoded Token:', decoded);
    return decoded;
  } catch (error) {
    console.error('Error verifying token:', error.message);
    throw new Error('Invalid token');
  }
}

export { generateToken, verifyToken };
