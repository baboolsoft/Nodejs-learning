
import express from 'express';
import authLogin from '../controller/login.controller.js';

let router=express.Router()

router.post('/',authLogin)

export default router;

