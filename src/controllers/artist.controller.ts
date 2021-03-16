import { Request, Response } from 'express';
import Artist, { IArtist } from '../models/Artist';

// Obtiene un autor por id
export async function getArtist(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const artist = await Artist.findById(id);
    return res.json(artist);
}

// Obtiene 10 autores
export async function getArtists(req: Request, res: Response): Promise<Response> {
    let limit = Number(req.query.limit) || 10;
    limit > 100 ? (limit = 100) : null;
    const artists = await Artist.find().limit(limit);
    return res.json(artists);
}

// Crea un nuevo autor y lo guarda en la base de datos
export async function createArtist(req: Request, res: Response): Promise<Response> {
    // Obtenemos los datos del autor de req.bosy
    const { name, lname, country, bday } = JSON.parse(JSON.stringify(req.body));

    // Asiganamos los datos a un nuevo autor
    const newArtist = {
        name,
        lname,
        country,
        bday
    };

    // Generamos el nuevo autor y lo guardamos en la base de datos
    const artist = new Artist(newArtist);
    await artist.save();

    return res.json({
        msg: 'Artista creado',
        artist: artist
    });
}

export async function deleteArtist(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const artist = (await Artist.findOneAndRemove({ _id: id })) as IArtist;

    return res.json({
        msg: 'Artista eliminado',
        artist: artist
    });
}

export async function updateArtist(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, lname, country, bday } = JSON.parse(JSON.stringify(req.body));

    const updatedArtist = await Artist.findByIdAndUpdate(
        id,
        {
            name,
            lname,
            country,
            bday
        },
        { new: true }
    );

    return res.json({
        msg: 'Artista actualizado',
        updatedArtist: updatedArtist
    });
}
