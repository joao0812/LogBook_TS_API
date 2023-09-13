import { IDeletePositionRepository } from "../../../controllers/Position/deletePosition/protocols";
import { HTTPresponse } from "../../../controllers/types/globalProtocols";
import positionModel, { Position } from "../../../models/Positon";

export class DeletePositionRepository implements IDeletePositionRepository {
    async removePosition(id: string): Promise<Position> {
        const position = await positionModel.findOneAndRemove({_id: id}).lean().populate('company_id')
        if(!position){
            throw new Error(`No positio ${id} to remove`)
        }
        const {_id, ...rest} = position
        return {id: _id.toHexString(), ...rest}
    }
}