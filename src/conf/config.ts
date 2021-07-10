import dotenv from 'dotenv';
dotenv.config();

/**
 * Database environment variable
 * 
 */
const dbConfig = {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT || 27017,
    DB_USERNAME: process.env.DB_USERNAME || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME || 'admin'
}

/**
 * App environment variable
 */
const appConfig = {
    APP_PORT: process.env.APP_PORT,
    APP_HOSTNAME: process.env.APP_HOSTNAME || '127.0.0.1'
}

export { dbConfig, appConfig };