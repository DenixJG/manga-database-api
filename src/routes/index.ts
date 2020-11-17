import { Router } from "express";
const router = Router();

import { createManga, getMangas, getManga, deleteManga, updateManga } from "../controllers/manga.controller";

import multer from "../libs/multer";

router.route("/mangas")
    .get(getMangas)

router.route("/mangas/new-manga")
    .post(multer.single("mangaImage"), createManga)

router.route("/mangas/:id")
    .get(getManga)
    .put(multer.single("mangaImage"), updateManga)
    .delete(deleteManga)

export default router;
