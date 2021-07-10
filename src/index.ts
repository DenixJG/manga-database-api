import app from './app';
import { startConnection } from './database';

async function main() {
    startConnection();
    await app
        .listen(app.get('port'))
        .on('listening', () => {
            console.log(`\n[INFO] Server running on http://${app.get('hostname')}:${app.get('port')}\n`);
        })
        .on('error', () => {
            console.error('\n[ERR] Error on server listening\n');
        });
}

main();
