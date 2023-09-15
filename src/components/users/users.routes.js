import { Router } from "express";
import { getAllUsers } from "./users.controllers.js";

const router = Router();

router.get('/users', getAllUsers);

export default router; 