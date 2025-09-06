import Employee from "../models/employee.model.js"

export const employeeGet = async (req,res)=>{
    try{
      const employees= await Employee.find()
      res.json(employees)
    }
    catch(err){
      res.status(500).json({message:err.message})
    }
}

export const employeeCreate =async(req,res)=>{

  console.log(req.body)

  //validate your data

  const newEmployee=new Employee ({
    emp_name:req.body.name,
    emp_email:req.body.email,
    emp_password:req.body.password,
    emp_position:req.body.position,
  })
  try{
  const employees=await newEmployee.save()
  res.status(201).json(employees)
  }catch(err){
    res.status(409).json({message:err.message})
  }
}

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
       emp_name:req.body.name,
       emp_email:req.body.email,
       emp_password:req.body.password,
       emp_position:req.body.position,  
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