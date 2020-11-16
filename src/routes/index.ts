import { Router } from "express";
const router = Router();

import { createMangaImage, getMangaImage } from "../controllers/manga.controller";

router.route("/manga-images")
    .post(createMangaImage)
    .get(getMangaImage)

export default router;
