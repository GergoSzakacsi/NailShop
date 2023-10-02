import { nanoid } from 'nanoid';
import db from '../connection';

export default {
  createTable() {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT,
      password_hash TEXT,
      is_admin BOOLEAN
    )
  `;
    db.run(sql, (err) => {
      if (err) {
        console.log(`Products table creation error: ${err.message}`);
        throw err;
      }
    });
  },

  getByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    return new Promise((resolve, reject) => {
      db.get(sql, [email], (err, row) => {
        if (err) reject(err);
        else {
          const { id, password_hash: passwordHash, is_admin: isAdmin } = row;
          resolve({ id, email, passwordHash, isAdmin });
        }
      });
    });
  },

  create({ email, passwordHash, isAdmin = false }) {
    const id = nanoid();
    const sql =
      'INSERT INTO users(id, email, password_hash, is_admin) VALUES($id, $email, $passwordHash, $isAdmin)';
    const params = { $id: id, $email: email, $passwordHash: passwordHash, $isAdmin: isAdmin };

    return new Promise((resolve, reject) => {
      db.run(sql, params, (err) => {
        if (err) reject(err);
        else resolve({ email, isAdmin, id });
      });
    });
  },
};
