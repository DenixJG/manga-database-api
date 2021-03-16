import { Router } from "express";
const router = Router();

import { 
     getArtist,
     getArtists,
     createArtist,
     updateArtist,
     deleteArtist
} from "../controllers/artist.controller";


router.route("/artists")
    .get(getArtists)
    
router.route("/artists/new-artist")
    .post(createArtist)

router.route("/artists/:id")
    .get(getArtist)
    .delete(deleteArtist)
    .put(updateArtist)

export default router;