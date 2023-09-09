import express from "express";
import { GetAreaRepository } from "../repositories/Area/getArea/mongo-get-area";
import { GetAreaController } from "../controllers/Area/getArea/area-get";
import { CreateAreaRepository } from "../repositories/Area/createArea/mongo-create-area";
import { CreateAreaController } from "../controllers/Area/createArea/create-area";

const router = express.Router();

router
.get("/:id", async (req, res) => {
    const getAreaRepository = new GetAreaRepository();
    const getAreaController = new GetAreaController(
      getAreaRepository,
      req.params.id
    );

    const { body, statusCode } = await getAreaController.handleOne();
    res.send(body).status(statusCode);
  })
  .get("/", async (req, res) => {
    const getAreaRepository = new GetAreaRepository();

    const getAreaController = new GetAreaController(getAreaRepository);

    const { body, statusCode } = await getAreaController.handleAll();
    res.send(body).status(statusCode);
  })
  .post('/createmany', express.urlencoded({extended: true}), async (req, res)=> {
    const createAreaRepository = new CreateAreaRepository()

    const createAreaController = new CreateAreaController(createAreaRepository, [req.body])
    const { body, statusCode } = await createAreaController.handle();
    res.send(body).status(statusCode);
  })
  .post('/create', express.urlencoded({extended: true}), async (req, res)=> {
    const createAreaRepository = new CreateAreaRepository()
    
    const createAreaController = new CreateAreaController(createAreaRepository, req.body)
    const { body, statusCode } = await createAreaController.handleOne();
    res.send(body).status(statusCode);
  })
  

export default router;
