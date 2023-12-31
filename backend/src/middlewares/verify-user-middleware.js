import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../constants';
import HttpError from '../utils/httpError';

export default function (req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET_KEY);
    req.user = payload;
    next();
  } catch {
    next(new HttpError('invalid token', 400));
  }
}
