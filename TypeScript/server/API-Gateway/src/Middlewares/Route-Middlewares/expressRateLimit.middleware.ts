import { RateLimiter, Interval } from "limiter";
import { Request, Response, NextFunction } from "express";
interface createRateLimiterArgumentTypeCheck { tokensPerInterval: number, interval: Interval, numberOfTokensToSubtract: number, fireImmediately: boolean }

class RateLimiterExtended extends RateLimiter {
  numberOfTokensToSubtract: number;
  constructor({ tokensPerInterval, interval, fireImmediately, numberOfTokensToSubtract: numberOfTokensToSubtract }: createRateLimiterArgumentTypeCheck) {
    super({ tokensPerInterval, interval, fireImmediately });
    this.numberOfTokensToSubtract = numberOfTokensToSubtract;
  }
}
// Create a new rate limiter instance with desired settings
const createRateLimiter = ({ tokensPerInterval, interval, numberOfTokensToSubtract, fireImmediately }: createRateLimiterArgumentTypeCheck) => {
  return new RateLimiterExtended({
    tokensPerInterval,
    interval,
    fireImmediately: fireImmediately, // Add this option to throw errors immediately
    numberOfTokensToSubtract: numberOfTokensToSubtract
  });
};

// Reusable middleware function to handle rate limiting
const rateLimitMiddleware = (rateLimiter: RateLimiterExtended) => async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //  console.log("🚀 ~ file: expressRateLimit.middleware.ts:19 ~ rateLimiter.getTokensRemaining():", rateLimiter.getTokensRemaining())
 
  const remainingRequests = Math.floor(await rateLimiter.removeTokens(rateLimiter.numberOfTokensToSubtract).then());
  console.log("🚀 ~ file: expressRateLimit.middleware.ts:19 ~ remainingRequests:", remainingRequests)

  if (remainingRequests < 1) {
    res.writeHead(429, { 'Content-Type': 'text/plain;charset=UTF-8' });
    res.end('Too Many Requests - your IP is being rate limited');
    // res.status(401).send('Unknown error occurred while token verification');
  } else {
    next();
  }
};

export { createRateLimiter, rateLimitMiddleware };
