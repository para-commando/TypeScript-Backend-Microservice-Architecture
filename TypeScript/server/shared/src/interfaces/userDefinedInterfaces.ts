
import { Interval } from "limiter";

export interface createRateLimiterArgumentTypeCheck { tokensPerInterval: number, interval: Interval, numberOfTokensToSubtract: number, fireImmediately: boolean };

export interface CustomError {
    message: string;
    status?: number;
}
