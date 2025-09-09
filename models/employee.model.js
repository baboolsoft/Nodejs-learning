import { model, Schema } from "mongoose";

const schema=new Schema({
    first_name:{
        type:"String",
        required:true,
        trim:true
    },
    last_name:{
        type:"String",
        required:true,
        trim:true
    },
    email:{
        type:"String",
        required:true,
        trim:true
    },
    password:{
        type:"String",
        required:true,
        trim:true   
    },
    phone:{
        type:"String",
        required:true,
        trim:true
    },

    date_of_birth:{
        type:"String",
        required:true,
        trim:true
    },
    hire_date:{
        type:"String",
        required:true,
        trim:true
    },
    job_title:{
        type:"String",
        required:true,
        trim:true
    },
    department:{
        type:"String",
        required:true,
        trim:true
    },
    salary:{
        type:"String",
        required:true,
        trim:true
    },
    employee_status:{
        type:"String",
        required:true,
        trim:true
    },

},
    { timestamps:true}
);

const Employee=model("Employee",schema);

export default Employee;