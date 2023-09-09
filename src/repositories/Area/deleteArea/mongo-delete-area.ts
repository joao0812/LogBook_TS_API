import mongoose from "mongoose";
import logBookDB from "../../../configs/mongoDB_connection";
import { IDeleteAreaRepository } from "../../../controllers/Area/deleteArea/protocols";
import { Area } from "../../../models/Area";

export class DeleteAreaRepository implements IDeleteAreaRepository {
    async deleteArea(id: string): Promise<Area> {
        const areaDeleted = await logBookDB.collection<Omit<Area, 'id'>>('areas').findOneAndDelete({_id: new mongoose.Types.ObjectId(id)})
        if(!areaDeleted.value){
            throw new Error('Area to delete not found')
        }
        const {_id, ...rest} = areaDeleted.value

        return {id: _id.toHexString(), ...rest}
    }
}