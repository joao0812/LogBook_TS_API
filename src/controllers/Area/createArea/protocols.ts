import mongoose from "mongoose";
import { Area } from "../../../models/Area";
import { HTTPresponse } from "../../types/globalProtocols";

export interface ICreateAreaController {
    handle(): Promise<HTTPresponse<Area[]>>,
    handleOne(): Promise<HTTPresponse<Area>>
}

export interface ICreateAreaRepository {
    createAreas(area_name: Omit<Area, 'id'>[]): Promise<Area[]>
    createOneArea(area_name: Omit<Area, 'id'>): Promise<Area>
}