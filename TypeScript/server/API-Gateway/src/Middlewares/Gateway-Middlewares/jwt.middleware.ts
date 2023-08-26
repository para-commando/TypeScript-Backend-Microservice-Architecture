import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import {CustomError} from "../../../../shared/src/interfaces/userDefinedInterfaces"
import * as dotenv from 'dotenv';
dotenv.config();
 
 
export const authenticateJsonWebToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error('JWT secret not configured');
    }
     
    jwt.verify(token, secret) as JwtPayload;
     next();
  } catch (error) {
    if (error && typeof error === 'object' && 'message' in error) {
      const customError = error as CustomError;
      return res.status(401).send(customError.message);
    } else {
      return res.status(401).send('Unknown error occurred while token verification');
    }
  }
};
