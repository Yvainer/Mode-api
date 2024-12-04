import { Request, Response } from "express";
import { Frase } from "../models/Frase";
import { error } from "console";

export const ping = (req:Request, res:Response) =>{

    res.json({pong:true})
}

/*export const random = (req:Request, res:Response) => {
    let number: number = req.params.number
    res.json({number:})
}*/

export const nome = (req:Request, res:Response) => {
    let nome: string = req.params.nome
    res.json({nome: `Você enviou o nome :`})
}

export const criarFrase = async (req:Request, res:Response) => {
   let {autor, texto}  = req.body

   let novaFrase = await Frase.create({autor,texto})

   res.json({id: novaFrase.id, autor, texto})
}

export const listarFrases = async(req:Request, res:Response) => {
    //exibir as frases
    let lista = await Frase.findAll()
    res.json({lista})
}

export const pegarFrase = async(req:Request, res:Response) => {
    let {id} = req.params

    let frases = await Frase.findByPk(id)

    if(frases){
        res.json({frases})
    }else {
        res.json({erro: 'frese não encontrasda'})  
    }
}

export const editaFrase = async(req:Request, res:Response) => {
    let {id} = req.params
    let {autor, texto} = req.body
    let frase = await Frase.findByPk(id)
    if(frase){
        frase.autor = autor
        frase.texto = texto

        await frase.save()
        res.json({frase})
    }else{
        res.json({error: 'frase não existe'})
    }
}

export const deletaFrase = async(req:Request, res:Response) => {
    let {id} = req.params

    await Frase.destroy({
        where: {id}
    })
      res.json({})
}