import { processes } from '../Processes/process';
import {logger} from '../../../shared/src/configurations/logger.configurations';

interface ProcessMappers {
  process1: (asd: any) => Promise<any>;
}

export const processMappers: ProcessMappers = {
  process1: async (asd: any) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');

      const processResponse = await processes.coreProcess1(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object: ', err);
    }
  },
};
