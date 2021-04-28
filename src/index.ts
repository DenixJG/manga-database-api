import app from './app';
import { startConnection } from './database';

async function main() {
    startConnection();
    await app.listen(app.get('port'), app.get('hostname'));
    console.log(
        `\n[INFO] Server running on http://${app.get('hostname')}:${app.get('port')}\n`
    );
}

main();
