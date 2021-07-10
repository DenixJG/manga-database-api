import { Router } from 'express';
const router = Router();

import { searchMangaOnDb } from '../controllers/search.controller';

router.route('/search/').get(searchMangaOnDb);

export default router;
