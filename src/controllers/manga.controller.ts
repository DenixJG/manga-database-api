import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";

// Modelos
import Manga, { IManga } from "../models/Manga";

// Obtenemos todos los mangas de la base de datos.
export async function getMangas(req: Request, res: Response): Promise<Response> {
    const manga = await Manga.find();
    return res.json(manga);
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
    // TODO: Error al borrar un arhivo que no existe
    if (manga) {
        await fs.unlink(path.resolve(manga.mangaImagePath));
    }
    return res.json({
        message: "Manga eliminado"
    });
}

// Actualiza el manga de la base de datos
export async function updateManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, author, artist, description, gender, mangaInfo, mangaRead } = JSON.parse(JSON.stringify(req.body));

    const updatedManga = await Manga.findByIdAndUpdate(id, {
        title,
        author,
        artist,
        description,
        gender,
        mangaInfo,
        mangaRead
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
    const { title, author, artist, description, gender, mangaInfo, mangaRead } = JSON.parse(JSON.stringify(req.body));

    // Definimo los datos del nuevo manga a crear, los datos se reciben de req.body
    const newManga = {
        title: title,
        author: author,
        artist: artist,
        description: description,
        gender: gender,
        mangaInfo: mangaInfo,
        mangaRead: mangaRead,
        mangaImagePath: req.file.path
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
