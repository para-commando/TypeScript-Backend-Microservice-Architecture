const responseTime = require('response-time');
import { Request, Response, NextFunction } from 'express';

export const responseTimeMiddleware = responseTime({
    header: 'X-Response-Time',
  },(req:Request , res:Response ,next:NextFunction ) => {
    // Do something with the response time.
    next();
  })