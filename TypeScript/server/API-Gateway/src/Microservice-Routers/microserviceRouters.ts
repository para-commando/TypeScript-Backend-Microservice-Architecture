import { Request, Response, NextFunction } from "express";
import { processMappers } from '../../../sub-systems/Microservice-1/Process-Mappers/processMappers';
import {CustomError} from "../../../shared/src/interfaces/userDefinedInterfaces"
import { logger } from '../../../shared/src/configurations/logger.configurations';
import { createRateLimiter, rateLimitMiddleware } from "../Middlewares/Route-Middlewares/expressRateLimit.middleware"
import { z } from 'zod';

const app = require('../app');

// interval in milliseconds
const endpoint1Limiter = createRateLimiter({ tokensPerInterval: 3, interval: 10000, numberOfTokensToSubtract: 1, fireImmediately: true });

app.post("/myEndPoint1", rateLimitMiddleware(endpoint1Limiter),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Explore more and use accordingly
      const schema = z.object({
        name: z.string().optional().refine(value => value === 'Anirudh' || value === 'Nayak', {
          message: 'Invalid name value',
        }),
        demand: z.enum(['Highest', 'High', 'Medium', 'Low']).optional(),
        myTaskStatus: z.enum(['Not Started', 'In Progress', 'Completed', 'Unassigned']).optional(),
      });
      const validationResult = schema.parse(req.body);
      console.log("🚀 ~ file: microserviceRouters.ts:25 ~ validationResult:", validationResult)

        const response = await processMappers.process1(validationResult);

        logger.info("🚀 ~ file: microserviceRouters.js:31 ~ response:", response);
        res.json({
          response: response,
        });
      }
    catch (error) {
      logger.error('This is an error message.');

      if (error && typeof error === 'object' && 'message' in error) {
        const customError = error as CustomError;
        return res.status(customError?.status || 401).send(customError?.message);
      } else {
        return res.status(401).send('Unknown error occurred while token verification');
      }
    }

  });


app.listen(3000, () => {
  console.log('listening on port 3000');
});
