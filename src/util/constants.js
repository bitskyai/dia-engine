const packageJson = require('../../package.json');

const CONFIG = {
    TIMEOUT_VALUE_FOR_INTELLIGENCE: 5*60*1000,
    LOG_FILES_PATH: './public/log',
    NODE_ENV: 'development',
    EACH_TIME_INTELLIGENCES_NUMBER:2,
    SERVICE_NAME: packageJson.name,
    LOG_LEVEL: 'debug',
    PORT: 9099,     // server port number
    MONGODB_URI: `mongodb://localhost:27017/${packageJson.name}`,
    DEFAULT_HEALTH_METHOD: 'GET',
    DEFAULT_HEALTH_PATH: '/health',
    DEFAULT_INTELLIGENCES_METHOD: 'POST',
    DEFAULT_INTELLIGENCES_PATH: '/apis/intelligences'
};

const COLLECTIONS_NAME = {
    'sois': 'sois',
    'intelligences': 'intelligences',
    'intelligencesHistory': 'intelligences_history',
    'serverInfo': 'server_info',
    'history': 'history',
    'log': 'log',
    'error': 'error',
    'unknownData': 'unknown_data'
};

const DEFAULT_SOI = {
    status: "ACTIVE",
    health: {
        method: 'GET',
        path: '/apis/health'
    },
    callback: {
        method: 'POST',
        path: '/apis/intelligences'
    }
}

const INTELLIGENCE_STATUS = {
    configured: 'CONFIGURED',
    finished: 'FINISHED',
    running: 'RUNNING',
    paused: 'PAUSED',
    timeout: 'TIMEOUT'
}

module.exports = {
    CONFIG,
    COLLECTIONS_NAME,
    DEFAULT_SOI,
    INTELLIGENCE_STATUS
}