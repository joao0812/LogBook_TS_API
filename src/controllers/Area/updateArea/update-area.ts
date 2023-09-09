import { Area } from "../../../models/Area";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUpdateAreaController, IUpdateAreaRepository } from "./protocols";

export class UpdateAreaController implements IUpdateAreaController {
    constructor(private readonly updateAreaRepository: IUpdateAreaRepository, private readonly id: string ,private readonly body: Area) {}
    async handle(): Promise<HTTPresponse<Area>> {
        try {
            const area = await this.updateAreaRepository.updateArea(this.id, this.body)
            return {
                statusCode: 200,
                body: area
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'ERRO TO TRY UPDATEA AREA'
            }
        }
    }
}