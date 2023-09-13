import { IGetPositionRepository } from "../../../controllers/Position/getPosition/protocols";
import positionModel, { Position } from "../../../models/Positon";

export class GetPositionRepository implements IGetPositionRepository {
  async getPosition(): Promise<Position[]> {
    const position = await positionModel.find().lean().populate("company_id");
    if(!position) {
        throw new Error('Positions not founds')
    }
    return position.map(({_id, ...rest})=> ({
        id: _id.toHexString(),
        ...rest
    }))

  }
}
