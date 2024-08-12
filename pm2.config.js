module.exports = {
  apps: [
    {
      name: "Web3",
      script: "node_modules/next/dist/bin/next",
      instances: "1",
      exec_mode: "cluster",
      args: "start -p 80",
      env: {
        NODE_ENV: "development",
      },
      env_staging: {
        NODE_ENV: "staging",
      },
      env_production: {
        NODE_ENV: "production",
      },
      listen_timeout: 10000,
      kill_timeout: 5000,
    },
  ],
};
