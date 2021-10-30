import { connect } from 'mongoose';
import { dbConfig as config } from './conf/config';

const URI_REMOTE: string = `mongodb+srv://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}/${config.DB_NAME}?retryWrites=true&w=majority`;
const URI_LOCAL: string = `mongodb://${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`;

export async function startConnection() {
    await connect(URI_LOCAL)
        .then(() => {
            console.log('[INFO] Database connected successfully');
            console.log(`[INFO] Database host: ${config.DB_HOST}:${config.DB_PORT}`);
            console.log(`[INFO] Database user: ${config.DB_USERNAME}`);
            console.log(`[INFO] Database name: ${config.DB_NAME}`);
        })
        .catch((err) => console.log(`[ERROR] ${err}`));
}
