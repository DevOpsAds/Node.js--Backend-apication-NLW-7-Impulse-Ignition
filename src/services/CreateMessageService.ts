
import  {prismaClient} from "../prisma"

class CreateMessageService {
    async execute(text: string,user_id:string) {
        const message = await prismaClient.message.create({
            data:{
                user_id,
                text
            },
            include:{
                user:true
            }
        })
        return message
    }
}

export{CreateMessageService}