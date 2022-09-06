import express from 'express';
const router = express.Router();

import { employeePostController } from '../controllers/employee.post.controller';

router.post('/post/employee', employeePostController);

export default router;
