import { Position } from "../../../models/Positon";
import { DeletePositionRepository } from "../../../repositories/Position/deletePosition/mongo-delete-position";
import { HTTPresponse } from "../../types/globalProtocols";
import { IDeletePositionController } from "./protocols";

export class DeletePositionController implements IDeletePositionController {
  constructor(
    private readonly deletePositionRepository: DeletePositionRepository,
    private readonly id: string
  ) {}

  async handle(): Promise<HTTPresponse<Position>> {
    try {
      const position = await this.deletePositionRepository.removePosition(
        this.id
      );
      return {
        statusCode: 200,
        body: position,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Erro to remove positon',
      };
    }
  }
}
