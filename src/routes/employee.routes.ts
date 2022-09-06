import express from 'express';
const router = express.Router();

import { employeePostController } from '../controllers/employee.post.controller';
import { employeeGetAll } from '../controllers/employee.get.controller';
import { getallEmployeesById } from '../controllers/employee.getById.controller';
router.post('/post/employee', employeePostController);
router.get('/get/all', employeeGetAll);
router.get('/getSpecificId/:empId', getallEmployeesById);

export default router;
