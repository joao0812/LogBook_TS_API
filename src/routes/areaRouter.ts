import express from "express";
import { GetAreaRepository } from "../repositories/Area/getArea/mongo-get-area";
import { GetAreaController } from "../controllers/Area/getArea/area-get";

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
  

export default router;
