import { findById } from '../utils/employee.findById';
import { log } from '../logger';

const putEmployeeData = async (id: string, firstName: string, lastName: string, email: string, number: string, gender: string, photo: string) => {
    try {
        const updatedEmployee = await findById(id);

        if (firstName) {
            updatedEmployee.first_name = firstName;
        }
        if (lastName) {
            updatedEmployee.last_name = lastName;
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
