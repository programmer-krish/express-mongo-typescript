import { Request, Response } from 'express';
import { log } from '../logs/logger';
import { ERRORS } from '../validation/error';
import { deleteEmployee } from '../services/employee.delete.service';

const deleteEmployeeById = async (req: Request, res: Response) => {
    const id = req.params.empId;

    try {
        await deleteEmployee(id);
        res.status(200).json({ message: 'Deleted Successfully' });
    } catch (e) {
        log.info(e);
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
};

export { deleteEmployeeById };
