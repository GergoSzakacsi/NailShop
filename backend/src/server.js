// server.js
require('dotenv').config();
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { sequelize } from './utils/database'; // Ensure this import is correct
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import './passport-strategy';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to synchronize the database:', error);
  });
