import express from 'express';
import { employeeCreate, employeeGet } from '../controller/employee.controller.js';

let router=express.Router()

router.get('/',employeeGet)

router.post('/',employeeCreate)


export default router