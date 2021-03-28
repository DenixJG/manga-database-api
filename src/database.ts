import { connect } from 'mongoose';
import { dbConfig as config } from './conf/config';

export async function startConnection() {
    await connect(`mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        authSource: config.DB_NAME,
        user: config.DB_USERNAME,
        pass: config.DB_PASSWORD
    })
        .then((next) => {
            console.log('[INFO] Database connected successfully');
            console.log(`[INFO] Database host: ${config.DB_HOST}:${config.DB_PORT}`);
            console.log(`[INFO] Database user: ${config.DB_USERNAME}`);
            console.log(`[INFO] Database name: ${config.DB_NAME}`);
        })
        .catch((err) => console.log(`[ERROR] ${err}`));
}
