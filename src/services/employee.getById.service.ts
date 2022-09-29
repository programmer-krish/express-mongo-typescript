import { findById } from '../utils/employee.findById';
import { log } from '../logs/logger';

const getEmployeeById = async (id: string) => {
    try {
        const getUser = await findById(id);
        const { _id, first_name, last_name, email, number, gender, photo } = getUser;
        return {
            id: _id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            number: number,
            gender: gender,
            photo: photo
        };
    } catch (e) {
        log.info(e);
    }
};

export { getEmployeeById };
