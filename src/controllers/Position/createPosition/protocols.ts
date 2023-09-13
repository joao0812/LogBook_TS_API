import { Position } from "../../../models/Positon";
import { HTTPresponse } from "../../types/globalProtocols";

export interface ICreatePositionController {
    handle(): Promise<HTTPresponse<Position>>
}

export interface ICreatePositionRepository {
    createPositon(body: Omit<Position, 'id'>): Promise<Position>
}