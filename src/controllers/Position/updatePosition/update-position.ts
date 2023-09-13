import { Position } from "../../../models/Positon";
import { UpdatePositionRepository } from "../../../repositories/Position/updatePosition/mongo-update-position";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUpdatePositonController } from "./protocols";

export class UpdatePositionController implements IUpdatePositonController {
  constructor(
    private readonly updatePositionRepository: UpdatePositionRepository,
    private readonly id: string,
    private readonly body: Position
  ) {}
  async handle(): Promise<HTTPresponse<Position>> {
    try {
      const position = await this.updatePositionRepository.updatePositon(
        this.id,
        this.body
      );
      return {
        statusCode: 200,
        body: position,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Erro to try update position",
      };
    }
  }
}
