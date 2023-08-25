import { processes } from '../Processes/process';
import {logger} from '../../../shared/src/configurations/logger.configurations';
import {ErrorClassExtended} from '../../../shared/src/utilities/errorManagementUtilities'
interface ProcessMappers {
  process1: (asd: any) => Promise<any>;
}

export const processMappers: ProcessMappers = {
  process1: async (asd: any) => {
    try {
      logger.info(`This is the function argument : ${asd}`);

      logger.warn('This is a warning message.');
      if (asd=='error') throw new ErrorClassExtended('User not found', 401);

      const processResponse = await processes.coreProcess1(asd);
      return processResponse;
    } catch (err) {
      logger.error('This is an error object from processMappers: ', err);
      throw err;
    }
  },
};
