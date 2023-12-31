import mongoose from "mongoose";
import logBookDB from "../../../configs/mongoDB_connection";
import { IGetAreaRepository } from "../../../controllers/Area/getArea/protocols";
import areaModel, { Area } from "../../../models/Area";

export class GetAreaRepository implements IGetAreaRepository {
  async getAreas(id?: string): Promise<Area[]> {
    let areas = await areaModel.find().populate("company_id").lean();
    if (!areas) {
      areas = await areaModel.find({company_id: new mongoose.Types.ObjectId(id)}).populate("company_id").lean();
      if (!areas) {
        throw new Error("Area not created");
      }
    }
    return areas.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
  async getOneArea(id: string): Promise<Area> {
    const area = await logBookDB
      .collection<Omit<Area, "id">>("areas")
      .findOne({ _id: new mongoose.Types.ObjectId(id) });

    if (!area) {
      throw new Error("Area not created");
    }

    const { _id, ...rest } = area;

    return { id: _id.toHexString(), ...rest };
  }
}
