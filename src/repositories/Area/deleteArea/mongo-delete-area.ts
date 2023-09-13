import mongoose from "mongoose";
import logBookDB from "../../../configs/mongoDB_connection";
import { IDeleteAreaRepository } from "../../../controllers/Area/deleteArea/protocols";
import areaModel, { Area } from "../../../models/Area";

export class DeleteAreaRepository implements IDeleteAreaRepository {
    async deleteArea(id: string): Promise<Area> {
        const area = await areaModel.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}).lean().populate('company_id')
        if(!area){
            throw new Error('Area to delete not found')
        }
        const {_id, ...rest} = area

        return {id: _id.toHexString(), ...rest}
    }
}