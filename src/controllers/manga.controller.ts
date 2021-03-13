import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";

// Conf
import { defaults } from "../conf/manga-config.json";

// Modelos
import Manga, { IManga } from "../models/Manga";

// Obtenemos todos los mangas de la base de datos.
export async function getMangas(req: Request, res: Response): Promise<Response> {
    const manga = await Manga.find();
    return res.json(manga);
}

// PAginacion de los mangas
export async function getMangasPaginate(req: Request, res: Response): Promise<Response> {
    let limit = Number(req.query.limit) || 10;
    let page = Number(req.query.page) || 1;
    limit > 100 ? limit = 100 : null;
    page < 1 ? page = 1 : null;
    const mangas = await Manga.find().skip((page - 1) * limit).limit(limit);
    return res.json({
        mangas: mangas,
        actualPage: page,
        actualLimit: limit
    })
}

// Obtenemos un manga de la base de datos buscando con el ID
export async function getManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const manga = await Manga.findById(id);
    return res.json(manga);
}

// Elimina un manga de la base de datos haciendo uso del ID
export async function deleteManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const manga = await Manga.findOneAndRemove({ _id: id }) as IManga;
    // FIXME: Error al borrar un arhivo que no existe
    if (manga) {
        if (manga.mangaImagePath != defaults.mangaImage) {
            await fs.unlink(path.resolve(manga.mangaImagePath));
        }
    }
    return res.json({
        message: "Manga eliminado"
    });
}

// Actualiza el manga de la base de datos
export async function updateManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, author, artist, description } = JSON.parse(JSON.stringify(req.body));

    // FIXME: Si solo actualizo un capo los demas se ponen a null
    const updatedManga = await Manga.findByIdAndUpdate(id, {
        title,
        author,
        artist,
        description,
        // TODO: actualizar tambien la imagen si se desa, da error si no se actualiza.
        //mangaImagePath: req.file.path
    }, {new: true});

    return res.json({
        message: "Manga actualizado",
        updatedManga
    });
}

// Crea un nuevo manga en la base de datos
export async function createManga(req: Request, res: Response): Promise<Response> {
    // Organizamos los datos recibidos de req.body
    const { title, author, artist, description } = JSON.parse(JSON.stringify(req.body));

    // Comprueba si se sube una imagen o no, por defecto selecciona una imagen si no se sube nada
    let imagePath;

    if (!req.file || !req.file.path) {
        imagePath = defaults.mangaImage;
    } else {
        imagePath = req.file.path;
    }

    // Definimo los datos del nuevo manga a crear, los datos se reciben de req.body
    const newManga = {
        title: title,
        author: author,
        artist: artist,
        description: description,
        mangaImagePath: imagePath
    };

    const manga = new Manga(newManga);

    //  Guardamos el manga en la base de datos
    await manga.save();

    // Devolvemos un mensaje, y el objeto (manga) guardado.
    return res.json({
        message: "Nuevo manga creado",
        manga
    });
}
