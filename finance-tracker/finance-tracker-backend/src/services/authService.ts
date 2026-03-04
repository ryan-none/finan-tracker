import { findUserByEmail, createUser } from './userService';
import { hashPassword, comparePassword } from '../utils/hash';
import { User, UserSafe } from '../types/user';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const JWT_EXPIRES_IN = '1h';

export async function signup(email: string, password: string): Promise<UserSafe> {
  const existing = await findUserByEmail(email);
  if (existing) throw new Error('Email already exists');
  const hashed = await hashPassword(password);
  const user = await createUser(email, hashed);
  const { password: _, ...userSafe } = user;
  return userSafe;
}

export async function signin(email: string, password: string): Promise<{ token: string; user: UserSafe }> {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error('Invalid credentials');
  const { password: _, ...userSafe } = user;
  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  return { token, user: userSafe };
}
