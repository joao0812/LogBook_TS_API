import { User } from "../../../models/User";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUserGetController {
    handle(): Promise<HTTPresponse<User>>
    handleOne(): Promise<HTTPresponse<User>>
}

export interface IUserGetRespository {
    getUsers(): Promise<User[]>
    getUser(id: string): Promise<User>
}