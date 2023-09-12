export default () => ({
  server: {
    port: parseInt(process.env.SERVER_PORT, 10) || 8800,
    timeout: parseInt(process.env.SERVER_TIMEOUT, 10) || 1000 * 30,
  },
  log: {
    level: process.env.LOG_LEVEL || ['info', 'debug', 'error', 'warn'],
  },
  running: {
    mode: process.env.RUNNING_MODE,
  },
});
