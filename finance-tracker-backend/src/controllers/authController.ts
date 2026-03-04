import { Request, Response, NextFunction } from 'express';
import { signup, signin } from '../services/authService';

function logError(context: string, err: any) {
  console.error(`[${context}]`, err);
}

function logSuccess(context: string, message: string, data?: any) {
  console.log(`[${context}] SUCCESS: ${message}`, data ? data : '');
}

export async function signupController(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      logError('signupController', 'Email and password required');
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      logError('signupController', 'Invalid email format');
      return res.status(400).json({ success: false, message: 'Invalid email format' });
    }
    if (password.length < 8) {
      logError('signupController', 'Password must be at least 8 characters');
      return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
    }
    const user = await signup(email, password);
    logSuccess('signupController', `User signed up: ${email}`);
    return res.status(201).json({ success: true, user });
  } catch (err: any) {
    if (err.message === 'Email already exists') {
      logError('signupController', err.message);
      return res.status(400).json({ success: false, message: err.message });
    }
    logError('signupController', err);
    next(err);
  }
}

export async function signinController(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      logError('signinController', 'Email and password required');
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }
    const { token, user } = await signin(email, password);
    logSuccess('signinController', `User signed in: ${email}`);
    return res.status(200).json({ success: true, token, user });
  } catch (err: any) {
    if (err.message === 'Invalid credentials') {
      logError('signinController', 'Invalid credentials');
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
    logError('signinController', err);
    next(err);
  }
}