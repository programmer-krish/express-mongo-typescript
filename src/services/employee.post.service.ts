import { Employee } from '../models/employee.model';
import { log } from '../logs/logger';
import { Employees } from '../models/employee.interface';

const createEmployee = async (value: Employees) => {
        const { first_name, last_name, email, number, gender, photo } = value;
    try {
        const newUser = new Employee({
            first_name: first_name,
            last_name: last_name,
            email: email,
            number: number,
            gender: gender,
            photo: photo
        });

        const saveUser = await newUser.save();
        return saveUser;
    } catch (e) {
        log.info(e);
    }
};

export { createEmployee };
