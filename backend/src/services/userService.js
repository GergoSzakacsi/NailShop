import { User } from '../models/User';

async function getUserData(userId) {
  try {
    const user = await User.findByPk(userId);
    console.log('getuser',user);
    if (user) {
      return user;
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}

export { getUserData };
