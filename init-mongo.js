/**
 * Configuracion inicial para la base de datos de mangas
 *
 * @author Rafael Popescu
 *
 */

var DB_NAME = 'test-manga';     // Nombre de la base de datos
var DB_HOST = 'localhost';      // Host del servicio de mongodb
var DB_PORT = 27017;            // Puerto del servicio de mongodb

conn = new Mongo(`${DB_HOST}:${DB_PORT}`); // Host de la base de datos

db = db.getSiblingDB(DB_NAME); // Nombre de la base de datos a crear

db.dropDatabase(); // Limpiamos la base de datos para aplicar la configuracion por defecto
db.dropAllUsers(); // Eliminamos posibles usuario

/**
 * Creamos las colecciones necesarias para el funcionamiento basico de la app
 */
print('********** CREADNO COLECCIONES **********');
db.createCollection('mangas');
db.createCollection('authors');
db.createCollection('artists');

/**
 * Creamos los usuario esenciales para la base de datos
 * 
 * OWNER ->  Dueño, puede hacer todo en la base de datos
 * ADMIN -> Administrador, administra los usuarios y roles de la base de datos
 * USER -> Usuario, puede leer, escribir y borrar datos
 */

print('********** CREATE DB OWNER **********');
db.createUser({
    user: 'mangaOwner',
    pwd: '12345', // passwordPrompt(),
    roles: [{ role: 'dbOwner', db: DB_NAME }]
});

print('********** CREATE DB ADMIN **********');
db.createUser({
    user: 'mangaAdmin',
    pwd: '1234', //passwordPrompt(),
    roles: [{ role: 'userAdmin', db: DB_NAME }]
});

print('********** CREATE DB USER **********');
db.createUser({
    user: 'mangaUser',
    pwd: '123', // passwordPrompt(),
    roles: [{ role: 'readWrite', db: DB_NAME }]
});
