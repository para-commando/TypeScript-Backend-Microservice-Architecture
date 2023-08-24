"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const responseTime_middleware_1 = require("./Middlewares/Gateway-Middlewares/responseTime.middleware");
const morgan_middleware_1 = require("./Middlewares/Gateway-Middlewares/morgan.middleware");
const helmet_middleware_1 = require("./Middlewares/Gateway-Middlewares/helmet.middleware");
const jwt_middleware_1 = require("./Middlewares/Gateway-Middlewares/jwt.middleware");
const ddos_middleware_1 = require("./Middlewares/Gateway-Middlewares/ddos.middleware");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(responseTime_middleware_1.responseTimeMiddleware);
app.use(ddos_middleware_1.ddosMiddleware.express, (req, res, next) => {
    // calling next middleware in the queue
    next();
});
app.use(morgan_middleware_1.morganMiddleware);
app.use(jwt_middleware_1.authenticateJsonWebToken);
app.use(helmet_middleware_1.helmetMiddleware, (req, res, next) => {
    // calling next middleware in the queue
    next();
});
app.use(body_parser_1.default.json(), (req, res, next) => {
    // calling next middleware in the queue
    next();
});
module.exports = app;
//# sourceMappingURL=app.js.map