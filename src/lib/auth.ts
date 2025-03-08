import { User } from '@/types/user';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import prisma from '@lib/prisma';

import {findUserByUsername} from '@lib/user';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const createUser = async (username: string, password: string): Promise<User> => {
  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcryptjs.hash(password, 10);
  
  return prisma.user.create({
    data: {
      username,
      password: hashedPassword
    }
  });
};

export const validateUser = async (username: string, password: string): Promise<User | null> => {
  const user = await findUserByUsername(username);
  if (!user) return null;

  const isValid = await bcryptjs.compare(password, user.password);
  return isValid ? user : null;
};

export const generateToken = (user: User): string => {
  return jwt.sign(
    { id: user.id, username: user.username },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};