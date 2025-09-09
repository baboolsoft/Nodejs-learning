import bcrypt from 'bcrypt';
import Employee from "../models/employee.model.js";


export const employeeGet = async (req,res)=>{
    try{
      const employees= await Employee.find()
      res.json(employees)
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
}

export const employeeCreate = async (req, res) => {
  

  try {
        const existingEmployee = await Employee.findOne({ email: req.body.email });
            if (existingEmployee) {
                    return res.status(400).json({ message: "Email already exists" });
            }


    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newEmployee = new Employee({
      first_name: req.body.f_name,
      last_name: req.body.l_name,
      email: req.body.email,
      phone: req.body.phone,
      date_of_birth: req.body.dob,
      hire_date: req.body.h_date,
      job_title: req.body.job,
      department: req.body.dept,
      salary: req.body.sal,
      employee_status: req.body.emp_status,
      password: hashedPassword, 
    });

    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee); 
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const employeeDetail = async (req,res)=>{
      try{
        const employee= await Employee.findById(req.params.id)
        if(employee==null){
          return res.status(404).json({message:"cannot find employee"})
        }else{
          res.json(employee)
        }
      }
        catch(err){
          return res.status(500).json({message:err.message})
        }
      }

export const employeeUpdate = async(req,res)=>{
          
  try{
    const updateEmployee=await Employee.findByIdAndUpdate({_id:req.params.id},
    {
       name:req.body.name,
       email:req.body.email,
       password:req.body.password,
       position:req.body.position,  
    },
    {new:true});
    res.status(200).json(updateEmployee)
  }
  catch(err){
    return res.status(500).json({message:err.message})
  }
    
}

export const employeeDelete = async(req,res)=>{
    const movieId=req.params.id
    try{
      await Employee.deleteOne({_id:movieId})
      res.json({message:"employee deleted"})
    }
    catch(err){
      res.status(500).json({message:err.message})
}
}