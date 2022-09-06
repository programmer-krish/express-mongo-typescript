import { findById } from '../utils/employee.findById';
import { log } from '../logger';

const getEmployeeById = async (id: string) => {
    try {
        const getUser = await findById(id);
        return {
            id: getUser._id,
            first_name: getUser.first_name,
            last_name: getUser.last_name,
            email: getUser.email,
            number: getUser.number,
            gender: getUser.gender,
            photo: getUser.photo
        };
    } catch (e) {
        log.info(e);
    }
};

export { getEmployeeById };
