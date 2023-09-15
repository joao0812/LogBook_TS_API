import { User } from "../../../models/User";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUpdateUserController {
    handle(): Promise<HTTPresponse<User>>
}

export interface IUpdateUserRepository {
    updateUser(id: string, body: Omit<User, 'id'>): Promise<User>
}