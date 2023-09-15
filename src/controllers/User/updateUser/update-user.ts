import { User } from "../../../models/User";
import { UpdateUserRepository } from "../../../repositories/User/updateUser/mongo-update-user";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUpdateUserController } from "./protocols";

export class UpdateUserController implements IUpdateUserController {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly id: string,
    private readonly body: User
  ) {}
  async handle(): Promise<HTTPresponse<User>> {
    try {
      const user = await this.updateUserRepository.updateUser(
        this.id,
        this.body
      );
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
