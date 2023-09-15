import express from "express";
import { UserCreateRepository } from "../repositories/User/createUser/mongo-create-user";
import { UserCreateController } from "../controllers/User/createUser/create-user";

const router = express.Router();

router.post(
  "/",
  express.urlencoded({ extended: true }),
  express.json(),
  async (req, res) => {
    const userCreateRepository = new UserCreateRepository();
    const userCreateController = new UserCreateController(
      userCreateRepository,
      req.body
    );

    const { body, statusCode } = await userCreateController.handle();
    res.send(body).status(statusCode);
  }
);

export default router;
