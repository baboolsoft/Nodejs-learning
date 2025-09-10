import { model, Schema } from "mongoose";

const schema=new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: true },    
    is_verified: { type: Boolean, default: false }, 
    last_login: { type: Date, default: null },
    provider: { type: String, default: 'email' },
    profile_picture: { type: String, default: null },
    refreshToken: { type: String }
});


const Employee=model("Employee",schema);

export default Employee;