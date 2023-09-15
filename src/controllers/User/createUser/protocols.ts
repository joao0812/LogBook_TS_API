import { User } from "../../../models/User";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUserCreateController {
    handle(): Promise<HTTPresponse<User>>
}

export interface IUserCreateRepository {
    createUser(body: Omit<User, 'id'>): Promise<User>
}