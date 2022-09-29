import { Employee } from '../models/employee.model';
import { log } from '../logs/logger';

const getEmployees = async () => {
    try {
        const getUser = await Employee.find();
        return getUser;
    } catch (e) {
        log.info(e);
    }
};

export { getEmployees };
