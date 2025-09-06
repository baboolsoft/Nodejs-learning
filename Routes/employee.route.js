import express from "express";
import { employeeCreate, employeeDelete, employeeDetail, employeeGet, employeeUpdate } from "../controller/employee.controller.js";
import connectDB from "../lib/db.js";

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