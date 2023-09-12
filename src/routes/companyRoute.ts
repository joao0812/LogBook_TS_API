import express from 'express'
import { CreateAreaRepository } from '../repositories/Area/createArea/mongo-create-area'
import { CreateCompanyController } from '../controllers/Company/createCompany/create-company'
import { CreateCompanyRepository } from '../repositories/Company/createCompany/mongo-create-company'
import { GetCompanyRepository } from '../repositories/Company/getCompany/mongo-get-company'
import { GetCompanyController } from '../controllers/Company/getCompany/get-company'

const router = express.Router()

router
    .post('/', express.urlencoded({extended: true}), async (req, res)=> {
        const createCompanyRepository = new CreateCompanyRepository()
        
        const createCompanyController = new CreateCompanyController(createCompanyRepository, req.body)

        const {body, statusCode} = await createCompanyController.handle();
        res.send(body).status(statusCode)
    })
    .get('/', async (req, res)=> {
        const getCompanyRepository = new GetCompanyRepository()
        
        const getCompanyController = new GetCompanyController(getCompanyRepository)

        const {body, statusCode} = await getCompanyController.handle();
        res.send(body).status(statusCode)
    })

export default router