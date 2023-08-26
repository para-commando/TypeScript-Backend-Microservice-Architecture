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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const processMappers_1 = require("../../../sub-systems/Microservice-1/Process-Mappers/processMappers");
const logger_configurations_1 = require("../../../shared/src/configurations/logger.configurations");
const expressRateLimit_middleware_1 = require("../Middlewares/Route-Middlewares/expressRateLimit.middleware");
const app = require('../app');
// interval in milliseconds
const endpoint1Limiter = (0, expressRateLimit_middleware_1.createRateLimiter)({ tokensPerInterval: 5, interval: 10000, numberOfTokensToSubtract: 1, fireImmediately: true });
app.post("/myEndPoint1", (0, expressRateLimit_middleware_1.rateLimitMiddleware)(endpoint1Limiter), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const schema = joi_1.default.object({
            name: joi_1.default.string().valid('Anirudh', 'Nayak').default(null),
            demand: joi_1.default.string()
                .valid('Highest', 'High', 'Medium', 'Low')
                .default(null),
            myTaskStatus: joi_1.default.string()
                .valid('Not Started', 'In Progress', 'Completed', 'Unassigned')
                .default(null),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            logger_configurations_1.logger.warn('This is a warning message.');
            logger_configurations_1.logger.error('This is an error message.');
            res.sendStatus(400);
        }
        else {
            const response = yield processMappers_1.processMappers.process1(validationResult.value);
            logger_configurations_1.logger.info("🚀 ~ file: microserviceRouters.js:31 ~ response:", response);
            res.json({
                response: response,
            });
        }
    }
    catch (error) {
        logger_configurations_1.logger.error('This is an error message.');
        if (error && typeof error === 'object' && 'message' in error) {
            const customError = error;
            return res.status(customError.status || 401).send(customError.message);
        }
        else {
            return res.status(401).send('Unknown error occurred while token verification');
        }
    }
}));
app.listen(3000, () => {
    console.log('listening on port 3000');
});
//# sourceMappingURL=microserviceRouters.js.map