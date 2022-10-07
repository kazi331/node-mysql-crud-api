import express from "express";
import { users } from "../controllers/users.js";
const Router = express.Router();

Router.get('/users', users)

export default Router;