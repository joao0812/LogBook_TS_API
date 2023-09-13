import express from 'express'
import { CreateCompanyController } from '../controllers/Company/createCompany/create-company'
import { CreateCompanyRepository } from '../repositories/Company/createCompany/mongo-create-company'
import { GetCompanyRepository } from '../repositories/Company/getCompany/mongo-get-company'
import { GetCompanyController } from '../controllers/Company/getCompany/get-company'
import { UpdateCompanyRepository } from '../repositories/Company/updateCompany/mongo-update-company'
import { UpdateCompanyController } from '../controllers/Company/updateCompany/update-company'
import { DeleteCompanyRepository } from '../repositories/Company/deleteCompany/mongo-delete-company'
import { DeleteCompanyController } from '../controllers/Company/deleteCompany/deleteCompany'

const router = express.Router()

router
    .post('/', express.urlencoded({extended: true}), express.json(), async (req, res)=> {
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
    .put('/:id', express.urlencoded({extended: true}), async (req, res)=> {
        const updateCompanyRepository = new UpdateCompanyRepository()
        
        const updateCompanyController = new UpdateCompanyController(updateCompanyRepository, req.params.id, req.body)

        const {body, statusCode} = await updateCompanyController.handle();
        res.send(body).status(statusCode)
    })
    .delete('/:id', async (req, res)=> {
        const deleteCompanyRepository = new DeleteCompanyRepository()

        const deleteCompanyController = new DeleteCompanyController(deleteCompanyRepository, req.params.id)
        
        const {body, statusCode} = await deleteCompanyController.handle()
        res.send(body).status(statusCode)
    
    })

export default router