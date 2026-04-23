import express from "express";
import { createUser, deleteUser, findUser, updateUser } from "../controller/UserController.js";

const userRoutes =  express.Router();

userRoutes.post("/create" , createUser);
userRoutes.get("/find/:email" , findUser);
userRoutes.delete("/delete/:email" , deleteUser);
userRoutes.put("/update/:email" , updateUser);

export default userRoutes;