import express from 'express'
import { CreatePositionRepository } from '../repositories/Position/createPosition/mongo-create-position'
import { CreatePositionController } from '../controllers/Position/createPosition/create-positon'
import { GetPositionRepository } from '../repositories/Position/getPosition/mongo-get-position'
import { GetPositionController } from '../controllers/Position/getPosition/get-position'

const router = express.Router()

router  
    .post('/', express.urlencoded({extended: true}), express.json(), async(req, res)=> {
        const createPositionRepository = new CreatePositionRepository()
        const createPositonController = new CreatePositionController(createPositionRepository, req.body)
        const {body, statusCode} = await createPositonController.handle()
        res.send(body).status(statusCode)
    })
    .get('/', async(req, res)=> {
        const getPositionRepository = new GetPositionRepository()
        const getPositionController = new GetPositionController(getPositionRepository)
        const {body, statusCode} = await getPositionController.handle()
        res.send(body).status(statusCode)
    })

export default router