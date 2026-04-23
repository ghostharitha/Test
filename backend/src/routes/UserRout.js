import express from "express";
import { createUser, deleteUser, findUser, updateUser } from "../controller/UserController.js";

const userRoutes =  express.Router();

userRoutes.post("/create" , createUser);
userRoutes.get("/find" , findUser);
userRoutes.delete("/delete" , deleteUser);
userRoutes.put("/update" , updateUser);

export default userRoutes;