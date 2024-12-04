import {Router} from 'express'
import * as apiController from '../controller/apiController'

const router = Router()

router.get('/ping',apiController.ping)

//router.get('/random',apiController.random)

router.get('/nome/:nome',apiController.nome)

//criar endpont frases
router.post('/frases',apiController.criarFrase)

router.get('/frases',apiController.listarFrases)
//pegar a frase pelo id
router.get('/frases/:id',apiController.pegarFrase)

router.put('/frases/:id',apiController.editaFrase)

router.delete('/frases/:id',apiController.deletaFrase)
    


export default router