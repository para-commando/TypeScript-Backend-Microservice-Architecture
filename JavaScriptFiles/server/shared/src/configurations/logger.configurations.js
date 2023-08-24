"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const bunyan = require('bunyan');
const formatOut = require('bunyan-format')({ color: true });
exports.logger = bunyan.createLogger({
    name: 'my-app',
    level: 'info',
    streams: [
        {
            level: 'info',
            stream: formatOut,
        },
    ],
});
//# sourceMappingURL=logger.configurations.js.map