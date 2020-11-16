import { Request, Response } from "express";

export function getMangaImage(req: Request, res: Response) {
    return res.json({
        message: "Imagen obtenida"
    })
}

export function createMangaImage(req: Request, res: Response) {
    
    
    // console.log(manga.gender);
    return res.json({
        message: "Imagen subida exitosamente"
    });
}
