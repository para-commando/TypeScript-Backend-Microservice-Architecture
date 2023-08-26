"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rateLimitMiddleware = exports.createRateLimiter = void 0;
const userDefinedClasses_1 = require("../../../../shared/src/classes/userDefinedClasses");
// Create a new rate limiter instance with desired settings
const createRateLimiter = ({ tokensPerInterval, interval, numberOfTokensToSubtract, fireImmediately }) => {
    return new userDefinedClasses_1.RateLimiterExtended({
        tokensPerInterval,
        interval,
        fireImmediately: fireImmediately,
        numberOfTokensToSubtract: numberOfTokensToSubtract
    });
};
exports.createRateLimiter = createRateLimiter;
// Reusable middleware function to handle rate limiting
const rateLimitMiddleware = (rateLimiter) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //  console.log("🚀 ~ file: expressRateLimit.middleware.ts:19 ~ rateLimiter.getTokensRemaining():", rateLimiter.getTokensRemaining())
    const remainingRequests = Math.floor(yield rateLimiter.removeTokens(rateLimiter.numberOfTokensToSubtract).then());
    console.log("🚀 ~ file: expressRateLimit.middleware.ts:19 ~ remainingRequests:", remainingRequests);
    if (remainingRequests < 1) {
        res.writeHead(429, { 'Content-Type': 'text/plain;charset=UTF-8' });
        res.end('Too Many Requests - your IP is being rate limited');
        // res.status(401).send('Unknown error occurred while token verification');
    }
    else {
        next();
    }
});
exports.rateLimitMiddleware = rateLimitMiddleware;
//# sourceMappingURL=expressRateLimit.middleware.js.map