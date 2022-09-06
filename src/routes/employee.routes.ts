import express from 'express';
const router = express.Router();

import { employeePostController } from '../controllers/employee.post.controller';
import { employeeGetAll } from '../controllers/employee.get.controller';
router.post('/post/employee', employeePostController);
router.get('/get/all', employeeGetAll);

export default router;
