import"dotenv/config"
import  express from "express";
const bodyParser = require('body-parser')
import {router} from "./routes"
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(router)
app.use(express.json())

app.get("/github",(request, response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})
app.get("/go",(request, response)=>{
    response.redirect(`https://www.google.com`)
})



app.get("/signin/callback",(request, response)=>{
  const {code}=request.query;
  return response.json(code)
})


app.listen(4000,()=>console.log('Server is running on Port 4000 🚀'))
