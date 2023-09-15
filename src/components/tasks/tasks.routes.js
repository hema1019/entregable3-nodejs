import { Router } from "express";
import { getAllTasks } from "./tasks.controllers.js";

const router = Router();

router.get('/users', getAllTasks);

export default router; 