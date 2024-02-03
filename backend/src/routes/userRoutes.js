// Import necessary modules
import express from 'express';
import { getUserData } from '../services/userService';
import { authenticateToken } from '../middleware/authMiddleware'; // Update the path

const router = express.Router();

router.get('/data', authenticateToken, async (req, res) => {
  try {
    const userData = await getUserData(req.user.userId); // Using userId from authenticated user
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
