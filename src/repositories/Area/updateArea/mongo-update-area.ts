import mongoose from "mongoose";
import logBookDB from "../../../configs/mongoDB_connection";
import { IUpdateAreaRepository } from "../../../controllers/Area/updateArea/protocols";
import { Area } from "../../../models/Area";

export class UpdateAreaRepository implements IUpdateAreaRepository {
    async updateArea(id: string, body: Area): Promise<Area> {
        const area = await logBookDB.collection('areas').findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, body)
        console.log(area)
        return {
            id: '123',
            area_name: "area nome"
        }
    }
}