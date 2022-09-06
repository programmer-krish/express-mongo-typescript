import { Employee } from '../models/employee.model';

const findById = async (id: string) => {
    const singleEmployee = await Employee.findById(id).exec();

    if (!singleEmployee) {
        throw Error;
    }
    return singleEmployee;
};

export { findById };
