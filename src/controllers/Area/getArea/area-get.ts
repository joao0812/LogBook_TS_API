import { Area } from "../../../models/Area";
import { HTTPresponse } from "../../types/globalProtocols";
import { IGetAreaController, IGetAreaRepository } from "./protocols";

export class GetAreaController implements IGetAreaController {
  constructor(private readonly getAreaRepository: IGetAreaRepository, private readonly id?: string) {}

  async handleAll(): Promise<HTTPresponse<Area[]>> {
    try {
      const areas = await this.getAreaRepository.getAreas();

      return {
        statusCode: 200,
        body: areas,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "ERROR",
      };
    }
  }
  async handleOne(): Promise<HTTPresponse<Area>> {
    try {
        if(!this.id){
            throw new Error('Miss ID')
        }
      const area = await this.getAreaRepository.getOneArea(this.id);

      return {
        statusCode: 200,
        body: area,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "ERROR",
      };
    }
  }
}
