import { Request, Response } from 'express';
import { log } from '../logs/logger';
import { putEmployeeData } from '../services/employee.put.service';
import { ERRORS } from '../validation/error';
import { postSchema } from '../schema/schema';

const putEmployee = async (req: Request, res: Response) => {
    const { error, value } = postSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
    const id = req.params.empId;

    try {
        await putEmployeeData(value , id);
        res.status(200).json({ message: 'Updated Successfully' });
    } catch (e) {
        log.info(e);
        return res.status(400).json({
            status: 'error',
            error: ERRORS.DUPLICATE_USER
        });
    }
};

export { putEmployee };
