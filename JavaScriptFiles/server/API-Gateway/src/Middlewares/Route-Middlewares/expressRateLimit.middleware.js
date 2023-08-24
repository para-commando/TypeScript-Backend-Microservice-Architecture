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
const limiter_1 = require("limiter");
// Create a new rate limiter instance with desired settings
const createRateLimiter = (tokensPerInterval, interval) => {
    return new limiter_1.RateLimiter({
        tokensPerInterval,
        interval,
    });
};
exports.createRateLimiter = createRateLimiter;
// Reusable middleware function to handle rate limiting
const rateLimitMiddleware = (rateLimiter) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const remainingRequests = yield rateLimiter.removeTokens(1).then();
    if (remainingRequests < 0) {
        res.writeHead(429, { 'Content-Type': 'text/plain;charset=UTF-8' });
        res.end('429 Too Many Requests - your IP is being rate limited');
    }
    else {
        next();
    }
});
exports.rateLimitMiddleware = rateLimitMiddleware;
//# sourceMappingURL=expressRateLimit.middleware.js.map