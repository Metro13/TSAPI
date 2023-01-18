import express from 'express';
import controller from '../controller/general';
const router = express.Router();

router.get('/', controller.getGeneral);

export default router;