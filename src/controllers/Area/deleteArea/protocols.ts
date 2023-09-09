import { Area } from "../../../models/Area";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IDeleteAreaController {
    handle(): Promise<HTTPresponse<Area>>
}

export interface IDeleteAreaRepository {
    deleteArea(id: string): Promise<Area>
}