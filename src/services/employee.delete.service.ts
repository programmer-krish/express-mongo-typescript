import { Employee } from '../models/employee.model';
import { log } from '../logs/logger';

const deleteEmployee = async (empId: string) => {
    try {
        const deletedEmployee = await Employee.deleteOne({ _id: empId });
        if (deletedEmployee.deletedCount === 0) {
            throw new Error('Could not find Employee.');
        }
    } catch (e) {
        log.info(e);
    }
};

export { deleteEmployee };
