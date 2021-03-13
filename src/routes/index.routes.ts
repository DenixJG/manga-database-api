import { Router, Request, Response } from "express";
const router = Router();

function getIndex(req: Request, res: Response): void {
    res.json("API: /api/mangas");
}

router.route("/")
    .get(getIndex)

export default router;