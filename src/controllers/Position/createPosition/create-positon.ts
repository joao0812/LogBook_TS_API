import { Position } from "../../../models/Positon";
import { CreatePositionRepository } from "../../../repositories/Position/createPosition/mongo-create-position";
import { HTTPresponse } from "../../types/globalProtocols";
import { ICreatePositionController } from "./protocols";

export class CreatePositionController implements ICreatePositionController {
  constructor(
    private readonly createPositionRepository: CreatePositionRepository,
    private readonly body: Position
  ) {}
  async handle(): Promise<HTTPresponse<Position>> {
    try {
      const position = await this.createPositionRepository.createPositon(
        this.body
      );
      return {
        statusCode: 200,
        body: position,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Erro to create position',
      };
    }
  }
}
