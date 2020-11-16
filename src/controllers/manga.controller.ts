import { Request, Response } from "express";
import Manga from "../models/Manga";
import path from "path";
import fs from "fs-extra";

export async function getMangas(req: Request, res: Response): Promise<Response> {
    const manga = await Manga.find();
    return res.json({
        manga
    });
}

export async function getManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const manga = await Manga.findById(id);
    return res.json(manga);
}

export async function deleteManga(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const manga = await Manga.findByIdAndRemove(id);
    if (manga) {
        await fs.unlink(path.resolve(manga.mangaImagePath))
    }
    return res.json({});
}

export async function createManga(req: Request, res: Response): Promise<Response> {
    const { title, author, artist, description, gender, mangaInfo, mangaRead } = JSON.parse(JSON.stringify(req.body));

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

    await manga.save();

    return res.json({
        message: "Imagen subida exitosamente",
        manga
    });
}
