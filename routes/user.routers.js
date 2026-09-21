import express from "express";
import { loginUser, userRegister } from "../controlles/userController.js";
const router = express.Router();

router.route("/register").post(userRegister);
router.route("/login").post(loginUser);

export default router;
