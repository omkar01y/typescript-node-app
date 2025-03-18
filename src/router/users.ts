import express from "express";

import { getAllUsers, deleteUser} from '../controller/users';
import { isAuthenticated } from "../middlewares";


export default (router: express.Router)=>
{
    router.get('/users', isAuthenticated,getAllUsers);
    router.delete('/users/:id',isAuthenticated,deleteUser);
    router.patch('users/:id',isAuthenticated,deleteUser);
}