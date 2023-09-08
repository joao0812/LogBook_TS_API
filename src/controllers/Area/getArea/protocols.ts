import { Area } from "../../../models/Area"
import { HTTPresponse } from "../../types/globalProtocols"

export interface IGetAreaController {
    handleAll(): Promise<HTTPresponse<Area[]>>,
    handleOne(): Promise<HTTPresponse<Area>>
}

export interface IGetAreaRepository {
    getAreas(): Promise<Area[]>,
    getOneArea(): Promise<Area>
}