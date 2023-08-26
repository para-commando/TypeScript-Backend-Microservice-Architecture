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
const processMappers_1 = require("../../../sub-systems/Microservice-1/Process-Mappers/processMappers");
const logger_configurations_1 = require("../../../shared/src/configurations/logger.configurations");
const expressRateLimit_middleware_1 = require("../Middlewares/Route-Middlewares/expressRateLimit.middleware");
const zod_1 = require("zod");
const app = require('../app');
// interval in milliseconds
const endpoint1Limiter = (0, expressRateLimit_middleware_1.createRateLimiter)({ tokensPerInterval: 3, interval: 10000, numberOfTokensToSubtract: 1, fireImmediately: true });
app.post("/myEndPoint1", (0, expressRateLimit_middleware_1.rateLimitMiddleware)(endpoint1Limiter), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Explore more and use accordingly
        const schema = zod_1.z.object({
            name: zod_1.z.string().optional().refine(value => value === 'Anirudh' || value === 'Nayak', {
                message: 'Invalid name value',
            }),
            demand: zod_1.z.enum(['Highest', 'High', 'Medium', 'Low']).optional(),
            myTaskStatus: zod_1.z.enum(['Not Started', 'In Progress', 'Completed', 'Unassigned']).optional(),
        });
        const validationResult = schema.parse(req.body);
        console.log("🚀 ~ file: microserviceRouters.ts:25 ~ validationResult:", validationResult);
        const response = yield processMappers_1.processMappers.process1(validationResult);
        logger_configurations_1.logger.info("🚀 ~ file: microserviceRouters.js:31 ~ response:", response);
        res.json({
            response: response,
        });
    }
    catch (error) {
        logger_configurations_1.logger.error('This is an error message.');
        if (error && typeof error === 'object' && 'message' in error) {
            const customError = error;
            return res.status((customError === null || customError === void 0 ? void 0 : customError.status) || 401).send(customError === null || customError === void 0 ? void 0 : customError.message);
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