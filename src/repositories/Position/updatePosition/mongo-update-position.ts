import mongoose from "mongoose";
import { IUpdatePositonRepository } from "../../../controllers/Position/updatePosition/protocols";
import positionModel, { Position } from "../../../models/Positon";

export class UpdatePositionRepository implements IUpdatePositonRepository {
  async updatePositon(
    id: string,
    body: Position
  ): Promise<Position[]> {
    const oldPosition = await positionModel
      .findOne({ _id: new mongoose.Types.ObjectId(id) })
      .lean()
      .populate("company_id");
    const position = await positionModel.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      body
    );
    const newPosition = await positionModel
      .findOne({ _id: new mongoose.Types.ObjectId(id) })
      .lean()
      .populate("company_id");
    if (!oldPosition || !newPosition) {
      throw new Error(`Positon with id ${id} not found to update`);
    }

    return [
      {
        id: oldPosition._id.toHexString(),
        name: oldPosition.name,
        company_id: oldPosition.company_id,
      },
      {
        id: newPosition._id.toHexString(),
        name: newPosition.name,
        company_id: newPosition.company_id,
      },
    ];
  }
}
