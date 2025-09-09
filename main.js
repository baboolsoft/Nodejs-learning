
import express from 'express';
import authEmployeeRouter from './Routes/auth.employee.route.js';
import authLoginRouter from './Routes/auth.login.route.js';
import employeeRouter from './Routes/employee.route.js';



let app=express();
let PORT=4000;

//use middleware to parse the json data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/test',(req,res)=>{
    res.send({msg : "hello students!"})
})

//CURD functionality of employees
app.use('/employees',employeeRouter)
app.use('/register',authEmployeeRouter)
app.use('/login',authLoginRouter);



app.listen(PORT, () => {

    console.log(`server is running at port  http://localhost:${PORT}`);
})