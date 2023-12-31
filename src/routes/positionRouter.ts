import express from 'express'
import { CreatePositionRepository } from '../repositories/Position/createPosition/mongo-create-position'
import { CreatePositionController } from '../controllers/Position/createPosition/create-positon'
import { GetPositionRepository } from '../repositories/Position/getPosition/mongo-get-position'
import { GetPositionController } from '../controllers/Position/getPosition/get-position'
import { DeletePositionRepository } from '../repositories/Position/deletePosition/mongo-delete-position'
import { DeletePositionController } from '../controllers/Position/deletePosition/delete-position'
import { UpdatePositionRepository } from '../repositories/Position/updatePosition/mongo-update-position'
import { UpdatePositionController } from '../controllers/Position/updatePosition/update-position'

const router = express.Router()

// COLOCAR O GET COM O ID DO COMPANY PARA PEGAR TODOS AS POSITIONS DESSA COMPANY

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
    .delete('/:id', async (req, res)=> {
        const deletePositonRepository = new DeletePositionRepository()
        const deletePositionController = new DeletePositionController(deletePositonRepository, req.params.id)
        const {body, statusCode} = await deletePositionController.handle()
        res.send(body).status(statusCode)
    })
    .put('/:id', express.urlencoded({extended: true}), express.json(), async (req, res) => {
        const updatePositionRepository = new UpdatePositionRepository()
        const updatePositionController = new UpdatePositionController(updatePositionRepository, req.params.id, req.body)
        const {body, statusCode} = await updatePositionController.handle()
        res.send(body).status(statusCode)
    })

export default router