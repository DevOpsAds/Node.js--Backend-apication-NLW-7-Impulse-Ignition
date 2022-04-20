
import  {prismaClient} from "../prisma"


class ProfileUserService {

    async execute(user_id) {
        const user= await prismaClient.message.findFirst({
          where:{
              id:user_id
          }
        })
        return {user}
        }

       

      

    
}

export{ProfileUserService}