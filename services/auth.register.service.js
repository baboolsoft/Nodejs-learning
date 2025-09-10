import bcrypt from 'bcrypt';
import Employee from "../models/employee.model.js";
import { generateToken } from '../utility/genrateToken.js';

export const getEmployees = async () => {
    const employees = await Employee.find();
    const getToken = generateToken(employees);
    return { employees, getToken };
};

export const createEmployee = async (employeeData) => {
    const existingEmployee = await Employee.findOne({ email: employeeData.email });
    if (existingEmployee) {
        throw new Error("Email already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(employeeData.password, salt);

    const newEmployee = new Employee({
        username: employeeData.name,
        email: employeeData.email,
        password: hashedPassword,
    });

    const savedEmployee = await newEmployee.save();
    const accessToken = generateToken(savedEmployee);

    return { savedEmployee, accessToken };
};

export const getEmployeeById = async (id) => {
    const employee = await Employee.findById(id);
    if (!employee) return null;
    const detailToken = generateToken(employee);
    return { employee, detailToken };
};

export const updateEmployeeById = async (id, updateData) => {
    const updateEmployee = await Employee.findByIdAndUpdate(
        { _id: id },
        {
            username: updateData.name,
            email: updateData.email,
            password: updateData.password,
        },
        { new: true }
    );
    const updateToken = generateToken(updateEmployee);
    return { updateEmployee, updateToken };
};

export const deleteEmployeeById = async (id) => {
    await Employee.deleteOne({ _id: id });
    const deleteToken = generateToken(id);
    return deleteToken;
};
