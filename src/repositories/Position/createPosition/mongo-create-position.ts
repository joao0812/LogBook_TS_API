import { ICreatePositionRepository } from "../../../controllers/Position/createPosition/protocols";
import positionModel, { Position } from "../../../models/Positon";

export class CreatePositionRepository implements ICreatePositionRepository{
    async createPositon(body: Omit<Position, 'id'>): Promise<Position> {
        const position = new positionModel(body)
        const doc = await position.save()
        const positionInserted = await positionModel.findOne({_id: doc._id}).lean().populate('company_id')

        if(!doc || ! positionInserted){
            throw new Error('Erro to try create position')
        }
        const {_id, ...rest} = positionInserted

        return {id: _id.toHexString(), ...rest}
    }
}