import { Router } from "express";
const router = Router();

import { 
    getAuhtor,
    getAuhtors,
    createAuthor,
    deleteAuthor, 
    updateAuthor
} from "../controllers/author.controller";


router.route("/authors")
    .get(getAuhtors)
    
router.route("/authors/new-author")
    .post(createAuthor)

router.route("/authors/:id")
    .get(getAuhtor)
    .delete(deleteAuthor)
    .put(updateAuthor)

export default router;