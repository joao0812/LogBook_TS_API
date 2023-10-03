import { Area } from "../../../models/Area"
import { HTTPresponse } from "../../types/globalProtocols"


export interface IGetAreaController {
    handleAll(): Promise<HTTPresponse<Area[]>>,
    handleOne(): Promise<HTTPresponse<Area>>
}

export interface IGetAreaRepository {
    getAreas(id?: string): Promise<Area[]>,
    getOneArea(id: string): Promise<Area>
}