# Manga Database API

API usada para realizar operaciones **CRUD** sobre una base de datos de **MongoDB**.

## 1 - Instalación

Es importante disponer de [`Node.js`](https://nodejs.org/) instalado y también de su gestor de paquetes `npm`, este suele instalarse de forma automatica la instalar Node.js.

**Software necesario**

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/try/download/community) (Sistema de Base de datos)
* [MongoDB Compass](https://www.mongodb.com/products/compass) (Opcional)

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
* `APP_HOSTNAME` Host que usara la app, por defecto `localhost`
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
APP_HOSTNAME="192.168.0.0"

# Database environment variables
DB_HOST='localhost
DB_PORT=27017
DB_USERNAME=''
DB_PASSWORD='' 
DB_NAME=''
```

## 4 - Dockerfile

Construir una imagen del proyecto ejecutamos el comando en la carpeta donde se encuentra el proyecto y el archivo `Dockerfile`.

```ps
docker build -t manga-api:v1 .
```

Para poder ejecutar un contenedor de la imagen es necesario tener en cuenta las variables de entorno mencionadas en [Variables de entorno]().

Ejemplo:
```ps
docker run -it --rm --name manga-bo -p 8080:80 -e APP_PORT=80 -e DB_HOST=mongo -e DB_PASSWORD=password --network=netmanga denixjg/manga-api:v1
```

* `-it` Ejecuta el contenedor de forma interactiva, como una TTY..
* `--rm` Elimna el contenedor de forma automatica si existe..
* `--name` Nombre del contenedor.
* `-p` Puerto y redurecion del puerto.
* `-e` o `--env` Especifica una variable de entorno.
* `--network` Especifica a que red se conecta el contenedor.

Descargar imagen de **DockerHub** o ir al [respositorio](https://hub.docker.com/repository/docker/denixjg/manga-api).

```ps
docker pull denixjg/manga-api:v1
```