import bcrypt from 'bcrypt';
import Employee from '../models/employee.model.js';


const authLogin = async (req,res)=>{
    try{
        const user=await Employee.findOne({email:req.body.email})
        if(!user){
           return res.status(400).send('user not found please register')
        }
        let validatepassword=await bcrypt.compare(req.body.password,user.password)
        if(!validatepassword){
            return res.send('password incorrect')
        }
        else{
            res.json('logged successfully!!')
        }
    }
    catch(err){
        res.status(400).json(err)
    }
}

export default authLogin;

