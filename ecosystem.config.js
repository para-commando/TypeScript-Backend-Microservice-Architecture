module.exports = {
  apps: [
    {
      name: 'myTypeScriptArch',
      script: './JavaScript/server/API-Gateway/src/app.js',
      watch: true,
      ignore_watch: ['node_modules'],
      instances: 1,
      exec_mode: 'cluster',
      env: {
        DB_NAME: 'My_DB_NAME',
      },
    },
    {
      name: 'watch-myTypeScriptArch',
      script: 'tsc -w',      
    }
  ],
};
