import {
  createEmployee,
  deleteEmployeeById,
  getEmployeeById,
  getEmployees,
  updateEmployeeById
} from '../services/auth.register.service.js';

export const employeeGet = async (req, res) => {
    try {
        const { employees, getToken } = await getEmployees();
        res.status(201).json({
            statusCode: 200,
            success: true,
            Data: employees,
            accessToken: getToken
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const employeeCreate = async (req, res) => {
    try {
        const { savedEmployee, accessToken } = await createEmployee(req.body);
        res.status(201).json({
            success: true,
            message: "Employee created successfully",
            data: savedEmployee,
            accessToken: accessToken
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const employeeDetail = async (req, res) => {
    try {
        const result = await getEmployeeById(req.params.id);
        if (!result) {
            return res.status(404).json({ message: "Cannot find employee" });
        }
        res.json({
            statusCode: 200,
            success: true,
            Data: result.employee,
            accessToken: result.detailToken
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const employeeUpdate = async (req, res) => {
    try {
        const { updateEmployee, updateToken } = await updateEmployeeById(req.params.id, req.body);
        res.status(200).json({
            statusCode: 200,
            success: true,
            updateEmployee,
            accessToken: updateToken
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

export const employeeDelete = async (req, res) => {
    try {
        const deleteToken = await deleteEmployeeById(req.params.id);
        res.json({
            message: "Employee deleted successfully!!",
            accessToken: deleteToken
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
