import { Position } from "../../../models/Positon";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUpdatePositonController {
    handle(): Promise<HTTPresponse<Position>>
}

export interface IUpdatePositonRepository {
    updatePositon(id:string, body: Position): Promise<Position[]>
}