import Express,{Request, Response} from "express"
import path from 'path'
import dotenv from 'dotenv'
import apiRouter from './router/api'

dotenv.config()
const server = Express()
server.use(Express.urlencoded({extended:true}))

server.listen(process.env.PORT)
//usando a rota api.ts
server.use(apiRouter)

//CRIANDO ENPOINT DA PAG.NAO ENCONTRADO
server.use((req:Request, res:Response) =>{
    res.status(404)
    res.json({error:'endpoint não encotrada'})
})