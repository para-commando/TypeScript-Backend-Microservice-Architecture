const bunyan = require('bunyan');
const formatOut = require('bunyan-format')({ color: true });

export const logger = bunyan.createLogger({
    name: 'my-app',
    level: 'info',
    streams: [
      {
        level: 'info',
        stream: formatOut,
      },
    ],
  });

