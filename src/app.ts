import"dotenv/config"
import  express from "express";
const bodyParser = require('body-parser')
import {router} from "./routes"
import http from "http"
import{Server, Socket}from "socket.io"
import cors from "cors"

const app = express();

const severHttp=http.createServer(app)


app.use(express.json())
//habilitar o uso do cors
app.use(cors())
//implementar o uso do cors
//const io=new Server(severHttp)
/* foi addcionado ao code de active do sevidor mais um params de config de limte
de rota este parms es bem visivel comparado ao que era antes acima
*/
const io=new Server(severHttp,{
  cors:{
    origin:"*"
  }
})
//libera o canal de comunicação entre passagem e escuta do socket
io.on("📻 connection on",socket =>{
  console.log(`Usuário conectado no socket ☎️${socket.id}`);
})


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.get("/github",(request, response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get("/signin/callback",(request, response)=>{
  const {code}=request.query;
  return response.json(code)
})

app.use(router)
export {severHttp,io}
