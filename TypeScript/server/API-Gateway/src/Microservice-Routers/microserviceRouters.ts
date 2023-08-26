import { Request, Response, NextFunction } from "express";
import Joi from 'joi';
import { processMappers } from '../../../sub-systems/Microservice-1/Process-Mappers/processMappers';

import { logger } from '../../../shared/src/configurations/logger.configurations';
import { createRateLimiter, rateLimitMiddleware } from "../Middlewares/Route-Middlewares/expressRateLimit.middleware"

const app = require('../app');
interface CustomError {
  message: string;
  status: number;
}
// interval in milliseconds
const endpoint1Limiter = createRateLimiter({ tokensPerInterval: 5, interval: 10000, numberOfTokensToSubtract: 1, fireImmediately: true });

app.post("/myEndPoint1", rateLimitMiddleware(endpoint1Limiter),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const schema = Joi.object({
        name: Joi.string().valid('Anirudh', 'Nayak').default(null),
        demand: Joi.string()
          .valid('Highest', 'High', 'Medium', 'Low')
          .default(null),
        myTaskStatus: Joi.string()
          .valid('Not Started', 'In Progress', 'Completed', 'Unassigned')
          .default(null),
      });
      const validationResult = schema.validate(req.body);
      if (validationResult.error) {
        logger.warn('This is a warning message.');
        logger.error('This is an error message.');

        res.sendStatus(400);
      } else {
        const response = await processMappers.process1(validationResult.value);

        logger.info("🚀 ~ file: microserviceRouters.js:31 ~ response:", response);
        res.json({
          response: response,
        });
      }
    } catch (error) {
      logger.error('This is an error message.');

      if (error && typeof error === 'object' && 'message' in error) {
        const customError = error as CustomError;
        return res.status(customError.status || 401).send(customError.message);
      } else {
        return res.status(401).send('Unknown error occurred while token verification');
      }
    }

  });


app.listen(3000, () => {
  console.log('listening on port 3000');
});
