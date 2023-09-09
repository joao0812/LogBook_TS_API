import { Area } from "../../../models/Area";
import { DeleteAreaRepository } from "../../../repositories/Area/deleteArea/mongo-delete-area";
import { HTTPresponse } from "../../types/globalProtocols";
import { IDeleteAreaController } from "./protocols";

export class DeleteAreaController implements IDeleteAreaController {
    constructor(private readonly deleteAreaRepository: DeleteAreaRepository, private readonly id: string) {}
    async handle(): Promise<HTTPresponse<Area>> {
        try {
            const area = await this.deleteAreaRepository.deleteArea(this.id)
            return {
                statusCode: 200,
                body: area
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'ERRO TO TRY DELETE AREA'
            }
        }
    }
}