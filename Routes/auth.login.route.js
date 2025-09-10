
import express from 'express';
import authLogin from '../controller/auth.login.controller.js';

let router=express.Router()

router.post('/',authLogin)

export default router;

