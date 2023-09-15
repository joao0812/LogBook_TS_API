import { User } from "../../../models/User";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IDeleteUserController {
    handle(): Promise<HTTPresponse<User>>
}

export interface IDeleteUserRepository {
    removeUser(id: string): Promise<User>
}