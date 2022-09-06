import { Employee } from '../models/employee.model';
import { log } from '../logger';

const createEmployee = async (firstName: string, lastName: string, email: string, number: string, gender: string, photo: string) => {
    try {
        const newUser = new Employee({
            first_name: firstName,
            last_name: lastName,
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
