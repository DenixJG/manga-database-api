import { Router, Request, Response } from 'express';
const router = Router();

import { getDashboardInfo } from '../controllers/dashboard.controller';

router.route('/dashboard')
    .get(getDashboardInfo)

export default router;
