import express from 'express';
const router = express.Router();

import { employeePostController } from '../controllers/employee.post.controller';
import { employeeGetAll } from '../controllers/employee.get.controller';
import { getallEmployeesById } from '../controllers/employee.getById.controller';
import { putEmployee } from '../controllers/employee.put.controller';
import { deleteEmployeeById } from '../controllers/employee.delete.controller';

router.post('/post/employee', employeePostController);
router.get('/get/employee', employeeGetAll);
router.get('/getSpecificId/:empId', getallEmployeesById);
router.put('/update/:empId', putEmployee);
router.delete('/delete/:empId', deleteEmployeeById);
export default router;
