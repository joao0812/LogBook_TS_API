import mongoose from 'mongoose';
import logBookDB from '../../../configs/mongoDB_connection';
import {ICreateAreaRepository} from '../../../controllers/Area/createArea/protocols'
import areaModel, { Area } from '../../../models/Area';
export class CreateAreaRepository implements ICreateAreaRepository {
    async createOneArea(name: Omit<Area, 'id'>): Promise<Area> {       
        const area = new areaModel(name)
        const doc = await area.save()
        const araeInserted = await areaModel.findOne({_id: doc._id}).lean().populate('company_id')
        if(!doc || !araeInserted){
            throw new Error('Area not created')
        }
        const {_id, ...rest} = araeInserted
        return {id: _id.toHexString(),  ...rest}
    }
    async createAreas(name: Omit<Area, 'id'>[]): Promise<Area[]> {
        const name_obj: {name: string}[] = [] 
        name.map((area)=> {
          name_obj.push(area)  
        })
        const {insertedIds} = await logBookDB.collection('areas').insertMany(name_obj)
        return [{
            id: '123',
            name: 'software',
            company_id: new mongoose.Types.ObjectId('123')
        }]

    }
}
