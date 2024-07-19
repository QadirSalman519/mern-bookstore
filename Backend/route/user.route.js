import express from "express";
import {signUp,login} from "../controller/user.controller.js"
const router = express.Router()

router.post('/login',login)
router.post('/signup',signUp)

export default router;