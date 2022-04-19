import { Request,Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

// modificado vide o ADS
class ProfileUserController {
 async handle (request:Request,response:Response){
  const {user_id}=request
  const service=new ProfileUserService().execute (user_id)
  return response.json(service) 
 }
}
export {ProfileUserController}