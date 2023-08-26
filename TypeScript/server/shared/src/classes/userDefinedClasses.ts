import { RateLimiter} from "limiter";
import {createRateLimiterArgumentTypeCheck} from "../interfaces/userDefinedInterfaces"

export class RateLimiterExtended extends RateLimiter {
    numberOfTokensToSubtract: number;
    constructor({ tokensPerInterval, interval, fireImmediately, numberOfTokensToSubtract: numberOfTokensToSubtract }: createRateLimiterArgumentTypeCheck) {
      super({ tokensPerInterval, interval, fireImmediately });
      this.numberOfTokensToSubtract = numberOfTokensToSubtract;
    }
  }