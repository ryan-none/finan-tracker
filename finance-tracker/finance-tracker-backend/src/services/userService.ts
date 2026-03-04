import pool from '../config/db';
import { User } from '../types/user';


export async function findUserByEmail(email: string): Promise<User | null> {
  try {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0] || null;
  } catch (err) {
    console.error('[findUserByEmail]', err);
    throw err;
  }
}


export async function createUser(email: string, password: string): Promise<User> {
  try {
    const res = await pool.query(
      'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
      [email, password]
    );
    return res.rows[0];
  } catch (err) {
    console.error('[createUser]', err);
    throw err;
  }
}
