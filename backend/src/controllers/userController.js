import express from 'express';
import { getUserData } from '../services/userService';
import { authenticateUser } from '../middleware/authMiddleware'
const router = express.Router();

router.get('/data', authenticateUser, async (req, res) => {
  try {
    const userData = await getUserData(req.user.userId);
    console.log(userData);
    res.json(userData);
  } catch (error) {
    console.error('Error in user data route:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
