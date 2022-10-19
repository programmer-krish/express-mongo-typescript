import { findById } from '../utils/employee.findById';
import { log } from '../logs/logger';
import { Employees, IEmployee } from '../models/employee.interface';

const putEmployeeData = async (value: Employees , id :string) => {
            const { first_name, last_name, email, number, gender, photo } = value;
    try {
        const updatedEmployee = await findById(id);

        if (first_name) {
            updatedEmployee.first_name = first_name;
        }
        if (last_name) {
            updatedEmployee.last_name = last_name;
        }
        if (email) {
            updatedEmployee.email = email;
        }
        if (number) {
            updatedEmployee.number = number;
        }
        if (gender) {
            updatedEmployee.gender = gender;
        }
        if (photo) {
            updatedEmployee.photo = photo;
        }

        updatedEmployee.save();
    } catch (e) {
        log.info(e);
    }
};

export { putEmployeeData };
