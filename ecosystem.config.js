module.exports = {
  apps: [
    {
      name: 'app1',
      script: 'dist/index.js',
      watch: true,
      autorestart: false,
      //instances: 4,
      args: '8081 159662396333292 7843800e993175f143f473775053d475 FORK',
      exec_mode: "fork",
    },
    {
      name: 'app2',
      script: 'dist/index.js',
      watch: true,
      autorestart: false,
      // instances: 4,
      args: '8082 159662396333292 7843800e993175f143f473775053d475 CLUSTER',
      exec_mode: "cluster",
    },
  ],
};
