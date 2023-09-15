import { User } from "../../../models/User";
import { UserGetRespository } from "../../../repositories/User/getUser/mongo-get-user";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUserGetController } from "./protocols";

export class UserGetController implements IUserGetController {
  constructor(
    private readonly userGetRepository: UserGetRespository,
    private readonly id?: string
  ) {}
  async handle(): Promise<HTTPresponse<User>> {
    try {
      const user = await this.userGetRepository.getUsers();
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
  async handleOne(): Promise<HTTPresponse<User>> {
    try {
      if (!this.id) {
        throw new Error("Miss ID");
      }
      const user = await this.userGetRepository.getUser(this.id);
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
