import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router()

router.get("/api/view/", getUsers)

router.post("/api/add/", addUser)

router.put("/api/edit/:id", updateUser)

router.delete("/api/delete/:id", deleteUser)

export default router