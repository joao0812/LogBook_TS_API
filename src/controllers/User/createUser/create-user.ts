import { User } from "../../../models/User";
import { UserCreateRepository } from "../../../repositories/User/createUser/mongo-create-user";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUserCreateController } from "./protocols";

export class UserCreateController implements IUserCreateController {
  constructor(
    private readonly userCreateRepository: UserCreateRepository,
    private readonly body: User
  ) {}
  async handle(): Promise<HTTPresponse<User>> {
    try {
      const user = await this.userCreateRepository.createUser(this.body);
      console.log(user)
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
