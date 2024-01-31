import { Router } from "express";
import { register, login, logout, forgotPassword, } from "../controllers/authController.js";

const router = Router();

router.route('/register').post(register)

router.route('/login').post(login)

router.route('/logout').post(logout)

router.route('/forgotpassword').post(forgotPassword)


export default router;