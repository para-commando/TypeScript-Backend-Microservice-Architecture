import express, { Express, NextFunction, Request, Response } from 'express';
import { responseTimeMiddleware } from './Middlewares/Gateway-Middlewares/responseTime.middleware';
import { morganMiddleware } from './Middlewares/Gateway-Middlewares/morgan.middleware';
import { helmetMiddleware } from './Middlewares/Gateway-Middlewares/helmet.middleware';
import { authenticateJsonWebToken } from './Middlewares/Gateway-Middlewares/jwt.middleware';
import { ddosMiddleware } from './Middlewares/Gateway-Middlewares/ddos.middleware';
import bodyParser from 'body-parser';

const app: Express = express();

app.use(responseTimeMiddleware);
app.use(ddosMiddleware.express, (req: Request, res: Response, next: NextFunction) => {
  // calling next middleware in the queue
  next();
});

app.use(morganMiddleware);
app.use(authenticateJsonWebToken);
app.use(helmetMiddleware, (req: Request, res: Response, next: NextFunction) => {
  // calling next middleware in the queue
  next();
});
app.use(bodyParser.json(), (req: Request, res: Response, next: NextFunction) => {
  // calling next middleware in the queue
  next();
});

export = app;
