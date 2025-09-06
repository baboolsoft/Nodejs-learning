import { model, Schema } from "mongoose";

const schema=new Schema({
    emp_name:{
        type:"String",
        required:true,
        trim:true
    },
    emp_email:{
        type:"String",
        required:true,
        trim:true
    },
    emp_password:{
        type:"String",
        required:true,
        trim:true   
    },    
    emp_position:{
        type:"String",
        required:true,
        trim:true
    }
},
    { timestamps:true}
);

const Employee=model("Employee",schema);

export default Employee;