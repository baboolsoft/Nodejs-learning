import express from 'express';
import connectDB from "../config/db.js";
import { employeeCreate, employeeDelete, employeeDetail, employeeGet, employeeUpdate } from "../controller/auth.register.controller.js";


let  router = express.Router();

connectDB();

// R- for Read
router.get('/',employeeGet)

// s - for show employee details
router.get('/:id',employeeDetail)

//c- for create
router.post('/',employeeCreate)

//u- for update
router.put('/:id',employeeUpdate)

// D - for delete
router.delete('/:id',employeeDelete)

export default router;