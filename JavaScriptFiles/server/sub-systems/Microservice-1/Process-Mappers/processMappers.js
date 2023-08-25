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
exports.processMappers = void 0;
const process_1 = require("../Processes/process");
const logger_configurations_1 = require("../../../shared/src/configurations/logger.configurations");
const errorManagementUtilities_1 = require("../../../shared/src/utilities/errorManagementUtilities");
exports.processMappers = {
    process1: (asd) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            logger_configurations_1.logger.info(`This is the function argument : ${asd}`);
            logger_configurations_1.logger.warn('This is a warning message.');
            if (asd == 'error')
                throw new errorManagementUtilities_1.ErrorClassExtended('User not found', 401);
            const processResponse = yield process_1.processes.coreProcess1(asd);
            return processResponse;
        }
        catch (err) {
            logger_configurations_1.logger.error('This is an error object from processMappers: ', err);
            throw err;
        }
    }),
};
//# sourceMappingURL=processMappers.js.map