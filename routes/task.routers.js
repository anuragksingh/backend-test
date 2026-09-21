import express from "express";
const router = express.Router();
import { createTask } from "../controlles/taskController.js";
import { loginUser } from "../controlles/userController.js";
import { verifyUserAuth } from "../middleware/userRole.js";

router.route("/task").post( createTask);

export default router;
