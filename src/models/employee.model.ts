import { Schema, model, connect } from 'mongoose';
import { Employees } from './employee.interface';

const EmployeeSchema = new Schema<Employees>(
    {
        first_name: { type: String, required: true, unique: true },
        last_name: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        number: { type: String, required: true },
        gender: { type: String, required: true },
        photo: { type: String, required: true, unique: true }
    },
    { timestamps: true, strict: false }
);

const Employee = model<Employees>('Employee', EmployeeSchema);

export { Employee };
