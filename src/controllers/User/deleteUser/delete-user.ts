import { User } from "../../../models/User";
import { DeleteUserRepository } from "../../../repositories/User/deleteUser/mongo-delete-user";
import { HTTPresponse } from "../../types/globalProtocols";
import { IDeleteUserController } from "./protocols";

export class DeleteUserController implements IDeleteUserController {
  constructor(
    private readonly deleteUserRepository: DeleteUserRepository,
    private readonly id: string
  ) {}
  async handle(): Promise<HTTPresponse<User>> {
    try {
      const user = await this.deleteUserRepository.removeUser(this.id);
      return {
        statusCode: 200,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: String(error),
      };
    }
  }
}
