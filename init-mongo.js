/**
 * Configuracion inicial para la base de datos de mangas
 *
 * @author Rafael Popescu
 *
 */

var DB_NAME = 'test-manga';
var DB_HOST = 'localhost';
var DB_PORT = 27017;

conn = new Mongo(`${DB_HOST}:${DB_PORT}`); // Host de la base de datos

db = db.getSiblingDB(DB_NAME); // Nombre de la base de datos a crear

db.dropDatabase(); // Limpiamos la base de datos para aplicar la configuracion por defecto
db.dropAllUsers(); // Eliminamos posibles usuario

print('********** CREADNO COLECCIONES **********');
db.createCollection('mangas');
db.createCollection('authors');
db.createCollection('artists');

print('********** CREATE DB OWNER **********');
db.createUser({
    user: 'mangaOwner',
    pwd: passwordPrompt(),
    roles: [{ role: 'dbOwner', db: DB_NAME }]
});

print('********** CREATE DB ADMIN **********');
db.createUser({
    user: 'mangaAdmin',
    pwd: passwordPrompt(),
    roles: [{ role: 'userAdmin', db: DB_NAME }]
});

print('********** CREATE DB USER **********');
db.createUser({
    user: 'mangaUser',
    pwd: passwordPrompt(),
    roles: [{ role: 'readWrite', db: DB_NAME }]
});
