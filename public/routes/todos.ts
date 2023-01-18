import express from 'express';
import controller from '../controller/todo';
const router = express.Router();

router.get('/', controller.getTodos);

export default router;