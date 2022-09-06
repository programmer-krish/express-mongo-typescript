import { ERRORS } from '../validation/error';
import { responseSchema } from '../validation/schemaValidation';
import { getEmployeeById } from '../services/employee.getById.service';
import { Request, Response } from 'express';
import { log } from '../logger';

const getallEmployeesById = async (req: Request, res: any) => {
    const { error, value } = responseSchema.validate(res.body);

    if (error) {
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
    try {
        const data = await getEmployeeById(req.params.empId);
        res.status(200).json(data);
    } catch (e) {
        log.info(e);
        return res.status(403).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
};

export { getallEmployeesById };
