import { Position } from "../../../models/Positon";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IGetPositionController {
    handle(): Promise<HTTPresponse<Position[]>>
}

export interface IGetPositionRepository {
    getPosition(): Promise<Position[]>
}