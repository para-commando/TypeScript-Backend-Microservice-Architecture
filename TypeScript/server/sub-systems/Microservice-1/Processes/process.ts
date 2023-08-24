import {logger} from '../../../shared/src/configurations/logger.configurations';
interface ProcessMappers {
    coreProcess1: (asd: any) => Promise<any>;
  }

export const processes:ProcessMappers = {
    coreProcess1: async (asd)=>{
        logger.info(`This is the function argument : ${asd}`);

        return asd
    },
}
