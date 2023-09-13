import { Position } from "../../../models/Positon";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IDeletePositionController {
    handle(): Promise<HTTPresponse<Position>>
}

export interface IDeletePositionRepository {
    removePosition(id: string): Promise<Position>
}