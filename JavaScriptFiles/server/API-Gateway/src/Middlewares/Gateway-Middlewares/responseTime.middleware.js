"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseTimeMiddleware = void 0;
const responseTime = require('response-time');
exports.responseTimeMiddleware = responseTime({
    header: 'X-Response-Time',
}, (req, res, next) => {
    // Do something with the response time.
    next();
});
//# sourceMappingURL=responseTime.middleware.js.map