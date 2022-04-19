
import  {prismaClient} from "../prisma"
import{io}from"../app"

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

        const infoWS={
            text: message.text,
            user_id:message.user_id,
            created_at:message.created_at,
            user:{
                name:message.user.name,
                avatar_url:message.user.avatar_url
            }
            
        }

        // execute o servilo de envio
        io.emit("new_message",infoWS)
        return message
    }
}

export{CreateMessageService}