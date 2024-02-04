import express from 'express';
import { getUserData } from '../services/userService';
import { authenticateToken } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/data', authenticateToken, async (req, res) => {
  try {
    const userData = await getUserData(req.user.userId);
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
