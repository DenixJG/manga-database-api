import { Request, Response } from 'express';

import Manga from '../models/Manga';
import Author from '../models/Author';
import Artist from '../models/Artist';

export async function getDashboardInfo(req: Request, res: Response): Promise<Response> {
    const totalMangas = await Manga.estimatedDocumentCount();
    const totalAuthors = await Author.estimatedDocumentCount();
    const totalArtists = await Artist.estimatedDocumentCount();

    return res.status(200).json([
        { info: {
            infoType: 'Mangas',
            cantidad: totalMangas 
        }},
        { info: {
            infoType: 'Autores',
            cantidad: totalAuthors
        }},
        { info: {
            infoType: 'Artistas',
            cantidad: totalArtists
        }}
    ]);
}
