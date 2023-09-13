import { Position } from "../../../models/Positon";
import { GetPositionRepository } from "../../../repositories/Position/getPosition/mongo-get-position";
import { HTTPresponse } from "../../types/globalProtocols";
import { IGetPositionController } from "./protocols";

export class GetPositionController implements IGetPositionController {
  constructor(private readonly getPositionRepository: GetPositionRepository) {}
  async handle(): Promise<HTTPresponse<Position[]>> {
    try {
      const position = await this.getPositionRepository.getPosition();
      return {
        statusCode: 200,
        body: position,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Error to get positions',
      };
    }
  }
}
