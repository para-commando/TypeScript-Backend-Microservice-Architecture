import {RateLimiter, Interval } from "limiter";
import { Request, Response, NextFunction } from "express";

// Create a new rate limiter instance with desired settings
const createRateLimiter = (tokensPerInterval: number, interval: Interval) => {
  return new RateLimiter({
    tokensPerInterval,
    interval,
  });
};

// Reusable middleware function to handle rate limiting
const rateLimitMiddleware = (rateLimiter: RateLimiter) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const remainingRequests = await rateLimiter.removeTokens(1).then();
  if (remainingRequests < 0) {
    res.writeHead(429, {'Content-Type': 'text/plain;charset=UTF-8'});
    res.end('429 Too Many Requests - your IP is being rate limited');
  } else {
    next();
  }
};

export { createRateLimiter, rateLimitMiddleware };
