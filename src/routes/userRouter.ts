import express from "express";
import { UserCreateRepository } from "../repositories/User/createUser/mongo-create-user";
import { UserCreateController } from "../controllers/User/createUser/create-user";
import { UserGetRespository } from "../repositories/User/getUser/mongo-get-user";
import { UserGetController } from "../controllers/User/getUser/get-user";
import { UpdateUserRepository } from "../repositories/User/updateUser/mongo-update-user";
import { UpdateUserController } from "../controllers/User/updateUser/update-user";
import { DeleteUserRepository } from "../repositories/User/deleteUser/mongo-delete-user";
import { DeleteUserController } from "../controllers/User/deleteUser/delete-user";

const router = express.Router();

router
  .post(
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
  )
  .get("/:id", async (req, res) => {
    const userGetRespository = new UserGetRespository();
    const userGetController = new UserGetController(userGetRespository, req.params.id);

    const { body, statusCode } = await userGetController.handleOne();
    res.send(body).status(statusCode);
  })
  .get("/", async (req, res) => {
    const userGetRespository = new UserGetRespository();
    const userGetController = new UserGetController(userGetRespository);

    const { body, statusCode } = await userGetController.handle();
    res.send(body).status(statusCode);
  })
  .put('/:id', express.urlencoded({extended: true}), express.json(), async (req, res)=> {
    const updateUserRepository = new UpdateUserRepository()
    const updateUserController = new UpdateUserController(updateUserRepository, req.params.id, req.body)
    const {body, statusCode} = await updateUserController.handle()
    res.send(body).status(statusCode)
  })
  .delete('/:id', async (req, res)=> {
    const deleteUserRepository = new DeleteUserRepository()
    const deleteUserController = new DeleteUserController(deleteUserRepository, req.params.id)

    const {body, statusCode} = await deleteUserController.handle()
    res.send(body).status(statusCode)
  })

export default router;
