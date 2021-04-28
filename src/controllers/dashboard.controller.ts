import { Request, Response } from 'express';

import Manga from '../models/Manga';
import Author from '../models/Author';
import Artist from '../models/Artist';

export async function getDashboardInfo(req: Request, res: Response): Promise<Response> {
    const totalMangas = await Manga.estimatedDocumentCount();
    const totalAuthors = await Author.estimatedDocumentCount();
    const totalArtists = await Artist.estimatedDocumentCount();

    const recentMangas = await Manga.find().sort({ $natural: -1 }).limit(2);
    const recentAuthors = await Author.find().sort({ $natural: -1 }).limit(2);
    const recentArtists = await Artist.find().sort({ $natural: -1 }).limit(2);

    return res.status(200).json({
        mangaInfo: {
            infoType: 'Mangas',
            link: '/manga-library',
            cantidad: totalMangas,
            reciente: recentMangas
        },
        authorInfo: {
            infoType: 'Autores',
            link: '/author-library',
            cantidad: totalAuthors,
            reciente: recentAuthors
        },
        artistInfo: {
            infoType: 'Artistas',
            link: '/artist-library',
            cantidad: totalArtists,
            reciente: recentArtists
        }
    });
}
