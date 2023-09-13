import mongoose from "mongoose";
import logBookDB from "../../../configs/mongoDB_connection";
import { IUpdateAreaRepository } from "../../../controllers/Area/updateArea/protocols";
import areaModel, { Area } from "../../../models/Area";

export class UpdateAreaRepository implements IUpdateAreaRepository {
  async updateArea(id: string, body: Area): Promise<Area[]> {
    //body.id = id
    const oldArea = await areaModel
      .findOne({ _id: new mongoose.Types.ObjectId(id) }).lean().populate('company_id');
    console.log(body);
    const area = await logBookDB
      .collection<Omit<Area, "id">>("areas")
      .updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: body });
    const newArea = await areaModel
      .findOne({ _id: new mongoose.Types.ObjectId(id) }).lean().populate('company_id');

    if (!oldArea || !newArea) {
      throw new Error("Area not found");
    }

    return [
      {
        id: oldArea._id.toHexString(),
        area_name: oldArea.area_name,
        company_id: oldArea.company_id
      },
      {
        id: newArea._id.toHexString(),
        area_name: newArea.area_name,
        company_id: newArea.company_id
      },
    ];
  }
}
