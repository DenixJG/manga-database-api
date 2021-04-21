# Manga Database API

API usada para realizar operaciones **CRUD** sobre una base de datos de **MongoDB**.

## 1 - Instalación

Es importante disponer de [`Node.js`](https://nodejs.org/) instalado y también de su gestor de paquetes `npm`, este suele instalarse de forma automatica la instalar `Node.js`.

Descarga [node.js](https://nodejs.org/)

##### Clonar el repositorio

```txt
git clone https://github.com/DenixJG/manga-database-api
```

##### Instalar las dependencias

Nos situamos en la carpeta del proyecto y ejectumos el siguiente comando:

```txt
npm install
```

Este comando procedera a instalar las dependencias necesarias para que el proyecto funcione correctamente.

## 2 - Configuración Inicial
**Iniciar base de datos antes que la API**, si se desea usar una configuración para la base de datos se puede usar el archivo `init-mongo.js`.
```bash
mongo init-mongo.js
```

Despues de ejecutar el comando nos pedira una contraseña para cada usuario que se va a crear.

## 3 - Variables de entorno

Se pueden usar las siguientes variables de entorno:

* `APP_PORT` Puerto a usar por la aplicacción, por defecto `4000`.
* `DB_HOST` Host de la base de datos, por defecto `localhost`.
* `DB_PORT` Puerto usado por la base de datos, por defecto `27017`.
* `DB_USERNAME` Usuario autorizado en la base de datos.
* `DB_PASSWORD` Contraseña del usuario.
* `DB_NAME` Nombre de la base de datos a usar.

Disponemos del paquete `dotenv` para poder configurar estas variables de entorno si la necesidad de crearlas en nuestro sistema operatiov, esto solo es recomendable en entronos de sesarrollo.

Ejemplo para archivo `.env`:

```txt
# App environment variables
APP_PORT=4000

# Database environment variables
DB_HOST='localhost
DB_PORT=27017
DB_USERNAME=''
DB_PASSWORD='' 
DB_NAME=''
```
