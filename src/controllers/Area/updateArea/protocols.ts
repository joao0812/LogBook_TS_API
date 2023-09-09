import { Area } from "../../../models/Area";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUpdateAreaController {
    handle(): Promise<HTTPresponse<Area>>
}
export interface IUpdateAreaRepository {
    updateArea(id:string, body: Area): Promise<Area>
}