import express from 'express'
import { CreatePositionRepository } from '../repositories/Position/createPosition/mongo-create-position'
import { CreatePositionController } from '../controllers/Position/createPosition/create-positon'

const router = express.Router()

router  
    .post('/', express.urlencoded({extended: true}), express.json(), async(req, res)=> {
        const createPositionRepository = new CreatePositionRepository()
        const createPositonController = new CreatePositionController(createPositionRepository, req.body)
    })

export default router