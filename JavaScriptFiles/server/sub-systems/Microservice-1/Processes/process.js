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
exports.processes = void 0;
const logger_configurations_1 = require("../../../shared/src/configurations/logger.configurations");
exports.processes = {
    coreProcess1: (asd) => __awaiter(void 0, void 0, void 0, function* () {
        logger_configurations_1.logger.info(`This is the function argument : ${asd}`);
        return asd;
    }),
};
//# sourceMappingURL=process.js.map