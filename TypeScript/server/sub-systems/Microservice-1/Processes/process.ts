import { logger } from '../../../shared/src/configurations/logger.configurations';
interface ProcessMappers {
    coreProcess1: (asd: any) => Promise<any>;
}

export const processes: ProcessMappers = {
    coreProcess1: async (asd) => {
        try {
            logger.info(`This is the function argument : ${asd}`);

            return asd
        }
        catch (err) {
            logger.error('This is an error object from process: ', err);
            throw err;
        }
    },
}
