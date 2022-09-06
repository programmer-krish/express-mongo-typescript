import express from 'express';
const router = express.Router();

import { employeePostController } from '../controllers/employee.post.controller';
import { employeeGetAll } from '../controllers/employee.get.controller';
import { getallEmployeesById } from '../controllers/employee.getById.controller';
import { putEmployee } from '../controllers/employee.put.controller';
router.post('/post/employee', employeePostController);
router.get('/get/all', employeeGetAll);
router.get('/getSpecificId/:id', getallEmployeesById);
router.put('/update/:id', putEmployee);

export default router;
