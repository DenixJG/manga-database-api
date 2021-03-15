import { Request, Response } from 'express';
import Author, { IAuthor } from '../models/Author';

// Obtiene un autor por id
export async function getAuhtor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const author = await Author.findById(id);
    return res.json(author);
}

// Obtiene 10 autores
export async function getAuhtors(req: Request, res: Response): Promise<Response> {
    let limit = Number(req.query.limit) || 10;
    limit > 100 ? (limit = 100) : null;
    const authors = await Author.find().limit(limit);
    return res.json(authors);
}

// Crea un nuevo autor y lo guarda en la base de datos
export async function createAuthor(req: Request, res: Response): Promise<Response> {
    // Obtenemos los datos del autor de req.bosy
    const { name, lname, country, bday } = JSON.parse(JSON.stringify(req.body));

    // Asiganamos los datos a un nuevo autor
    const newAuthor = {
        name,
        lname,
        country,
        bday
    };

    // Generamos el nuevo autor y lo guardamos en la base de datos
    const author = new Author(newAuthor);
    await author.save();

    return res.json({
        msg: 'Author creado',
        author
    });
}

export async function deleteAuthor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const author = (await Author.findOneAndRemove({ _id: id })) as IAuthor;

    return res.json({
        msg: 'Autor eliminado',
        author
    });
}

export async function updateAuthor(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, lname, country, bday } = JSON.parse(JSON.stringify(req.body));

    const updatedAuthor = await Author.findByIdAndUpdate(
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
        msg: 'Autor actualizado',
        updatedAuthor
    });
}
