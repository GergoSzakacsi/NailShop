import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import dotenv from 'dotenv';

dotenv.config();

// Registration function
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    // Send a success response
    res.status(201).json({ user });
  } catch (error) {
    // Handle errors
    console.error('Error during registration:', error);
    res.status(400).json({ message: 'Registration failed' });
  }
};

// Login function
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user with the provided email
    const user = await User.findOne({ where: { email } });

    // If the user is not found, send an error response
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the passwords match, generate a JWT token and send it in the response
    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle errors
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
