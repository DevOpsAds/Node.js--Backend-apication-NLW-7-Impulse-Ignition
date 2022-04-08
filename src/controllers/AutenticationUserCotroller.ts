import { Request,Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
 async handle (request:Request,response:Response) {
     const services =new AuthenticateUserService();
      services.poitThefuzion(51561)
 }

}
export {AuthenticateUserController}