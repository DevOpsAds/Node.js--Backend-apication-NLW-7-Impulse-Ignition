import { Request,Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
 async handle (request,response){
     const {code}= request.body
     console.log(code)
     const service =new AuthenticateUserService();
     const result=await service.execute(code)
     
     return response.json(result)
 }

}
export {AuthenticateUserController}