import { ERRORS } from '../validation/error';
import { createEmployee } from '../services/employee.post.service';
import { postSchema } from '../validation/schemaValidation';
import { Request, Response } from 'express';
import { log } from '../logs/logger';

//Create an Employee
const employeePostController = async (req: Request, res: Response) => {
    const { error, value } = postSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            status: 'error',
            error: ERRORS.NOT_FOUND
        });
    }
    const { first_name, last_name, email, number, gender, photo } = value;

    try {
        const data = await createEmployee(first_name, last_name, email, number, gender, photo);

        res.status(201).json(data);
    } catch (e) {
        log.info(e);
        return res.status(400).json({
            status: 'error',
            error: ERRORS.DUPLICATE_USER
        });
    }
};

export { employeePostController };
