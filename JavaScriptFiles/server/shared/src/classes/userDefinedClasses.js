"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimiterExtended = void 0;
const limiter_1 = require("limiter");
class RateLimiterExtended extends limiter_1.RateLimiter {
    constructor({ tokensPerInterval, interval, fireImmediately, numberOfTokensToSubtract: numberOfTokensToSubtract }) {
        super({ tokensPerInterval, interval, fireImmediately });
        this.numberOfTokensToSubtract = numberOfTokensToSubtract;
    }
}
exports.RateLimiterExtended = RateLimiterExtended;
//# sourceMappingURL=userDefinedClasses.js.map