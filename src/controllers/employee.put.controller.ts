import { Request, Response } from 'express';
import { log } from '../logger';
import { putEmployeeData } from '../services/employee.put.service';
import { ERRORS } from '../validation/error';
import { postSchema } from '../validation/schemaValidation';

const putEmployee = async (req: Request, res: Response) => {
    const { error, value } = postSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
    const { first_name, last_name, email, number, gender, phtoto } = value;
    const id = req.params.empId;

    try {
        await putEmployeeData(id, first_name, last_name, email, number, gender, phtoto);
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