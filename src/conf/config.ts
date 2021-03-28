import dotenv from 'dotenv';
dotenv.config();

/**
 * Database environment variable
 * 
 */
const dbConfig = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 27017,
    DB_USERNAME: process.env.DB_USERNAME || 'mangaUser',
    DB_PASSWORD: process.env.DB_PASSWORD || 'ZdbP321',
    DB_NAME: process.env.DB_NAME || 'manga-database'
}

/**
 * App environment variable
 */
const appConfig = {
    APP_PORT: process.env.APP_PORT || 4000
}

export { dbConfig, appConfig };