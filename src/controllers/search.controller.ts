import { Request, Response } from 'express';
import Artist from '../models/Artist';
import Author from '../models/Author';
import Manga from '../models/Manga';

export async function searchMangaOnDb(req: Request, res: Response): Promise<Response> {
    let who = String(req.query.who) || 'none';
    let name = String(req.query.name) || 'none';
    let mangasFound, authorsFound, artistsFound;
    if (who != 'undefined') {
        who.toLowerCase;
        switch (who) {
            case 'mangas':
                mangasFound = await Manga.find({ title: name }).limit(10).exec();
                if (mangasFound.length > 0) {
                    return res.status(200).json({ mangasFound });
                }
                break;
            case 'authors':
                authorsFound = await Author.find({ name }).limit(10).exec();
                if (authorsFound.length > 0) {
                    return res.status(200).json({ authorsFound });
                }
                break;
            case 'artists':
                artistsFound = await Artist.find({ name }).limit(10).exec();
                if (artistsFound.length > 0) {
                    return res.status(200).json({ artistsFound });
                }
                break;
            default:
                break;
        }
    } else {
        who = 'mangas';
        mangasFound = await Manga.find({ title: name }).limit(10).exec();
        if (mangasFound.length > 0) {
            return res.status(200).json({ mangasFound });
        }
    }

    return res.status(404).json({
        err: 'Nothing found'
    });
}
