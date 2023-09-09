import { Area } from "../../../models/Area";
import { CreateAreaRepository } from "../../../repositories/Area/createArea/mongo-create-area";
import { HTTPresponse } from "../../types/globalProtocols";
import { ICreateAreaController } from "./protocols";

export class CreateAreaController implements ICreateAreaController {
    constructor(private readonly createAreaRepository: CreateAreaRepository, private readonly areas: {area_name: string}[]) {}
    async handleOne() {
        try {
            console.log(this.areas)
            const area = await this.createAreaRepository.createOneArea(this.areas)
            return {
                statusCode: 200,
                body: area
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'ERROR'
            }
        }
    }
    async handle(): Promise<HTTPresponse<Area[]>> {
        try {
            const areas = await this.createAreaRepository.createAreas(this.areas)
            return {
                statusCode: 200,
                body: areas
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'ERROR TO TRY CREATE AREA'
            }
        }
    }
}