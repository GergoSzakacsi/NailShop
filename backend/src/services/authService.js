import bcrypt from 'bcrypt';
import User from '../models/User';
import jwtUtils from '../utils/jwtUtils';

async function register(name,email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name,email, password: hashedPassword });
  return user;
}

async function login(username, password) {
  const user = await User.findOne({ where: { username } });

  if (!user) {
    throw new Error('Invalid username or password');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error('Invalid username or password');
  }

  const token = jwtUtils.generateToken({ id: user.id, username: user.username });
  return token;
}

export { register, login };
