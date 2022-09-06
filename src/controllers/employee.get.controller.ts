import { Request, Response } from 'express';
import { log } from '../logger';
import { ERRORS } from '../validation/error';
import { services } from '../validation/schemaValidation';
import { getEmployees } from '../services/employee.get.service';

const employeeGetAll = async (req: Request, res: any) => {
    const { error, value } = services.validate(res.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }

    try {
        const data = await getEmployees();
        res.status(201).json(data);
    } catch (e) {
        log.info(e);
        return res.status(403).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
};

export { employeeGetAll };
