"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    socket: {
        host: 'localhost',
        port: 6379
    }
});
redisClient.connect();
exports.default = redisClient;
//# sourceMappingURL=redis.configurations.js.map