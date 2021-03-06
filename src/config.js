/* eslint-disable no-process-env */
const constants = require("./util/constants");
// Env vars should be casted to correct types
function getFullConfig(){
  let config = {
    PORT: Number(process.env.PORT) || constants.CONFIG.PORT,
    TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
    TYPEORM_URL: process.env.TYPEORM_URL,
    TYPEORM_HOST: process.env.TYPEORM_HOST,
    TYPEORM_PORT: process.env.TYPEORM_PORT,
    TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
    TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
    TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
    TASK_TIMEOUT_CHECK_TIME: 
      Number(process.env.TASK_TIMEOUT_CHECK_TIME) ||
      constants.CONFIG.TASK_TIMEOUT_CHECK_TIME,
    TASK_JOB_TIMEOUT: 
      Number(process.env.TASK_JOB_TIMEOUT) ||
      constants.CONFIG.TASK_JOB_TIMEOUT,
    RETAILER_STATE_CHECK_TIME:
      Number(process.env.RETAILER_STATE_CHECK_TIME) ||
      constants.CONFIG.RETAILER_STATE_CHECK_TIME,
    TIMEOUT_VALUE_FOR_TASK:
      Number(process.env.TIMEOUT_VALUE_FOR_TASK) ||
      constants.CONFIG.TIMEOUT_VALUE_FOR_TASK,
    SERVICE_NAME: process.env.SERVICE_NAME || constants.CONFIG.SERVICE_NAME,
    NODE_ENV: process.env.NODE_ENV || constants.CONFIG.NODE_ENV,
    EACH_TIME_TASKS_NUMBER:
      process.env.EACH_TIME_TASKS_NUMBER ||
      constants.CONFIG.EACH_TIME_TASKS_NUMBER,
    LOG_FILES_PATH: process.env.LOG_FILES_PATH || constants.CONFIG.LOG_FILES_PATH,
    LOG_LEVEL: process.env.LOG_LEVEL || constants.CONFIG.LOG_LEVEL,
    LOG_MAX_SIZE: process.env.LOG_MAX_SIZE || constants.CONFIG.LOG_MAX_SIZE,
    DEBUG_MODE: process.env.DEBUG_MODE,
    MONGODB_URI: process.env.MONGODB_URI || constants.CONFIG.MONGODB_URI,
    DEFAULT_HEALTH_METHOD:
      process.env.DEFAULT_HEALTH_METHOD || constants.CONFIG.DEFAULT_HEALTH_METHOD,
    DEFAULT_HEALTH_PATH:
      process.env.DEFAULT_HEALTH_PATH || constants.CONFIG.DEFAULT_HEALTH_PATH,
    DEFAULT_TASKS_METHOD:
      process.env.DEFAULT_TASKS_METHOD ||
      constants.CONFIG.DEFAULT_TASKS_METHOD,
    DEFAULT_TASKS_PATH:
      process.env.DEFAULT_TASKS_PATH ||
      constants.CONFIG.DEFAULT_TASKS_PATH
  };

  return config;
}

/**
 * Overwrite config object. Change config have two way:
 * 1. Use environment variables. This is useful use command line to start **bitsky-supplier**
 * 2. Directly call overwriteConfig function. This is useful programmaly start **bitsky-supplier**. For example: when use **bitsky-supplier** inside electron
 * @param {object} obj - config object that want to overwrite config
 */
function overwriteConfig(obj) {
  // config = { ...config, ...obj };
  // return config;
  return getFullConfig();
}

function getConfig(key){
  let config = getFullConfig();
  if(!key){
    return config;
  }else{
    return config[key];
  }
}

module.exports = {
  getConfig: getConfig,
  overwriteConfig: overwriteConfig
};
