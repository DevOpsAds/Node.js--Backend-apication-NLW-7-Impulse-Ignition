import { severHttp } from "./app";

//auteração do servidor antes app.listen :arrow_double_down:
severHttp.listen(4000,()=>console.log('Server is running on Port 4000 🚀'))