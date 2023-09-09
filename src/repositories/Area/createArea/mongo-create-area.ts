import logBookDB from '../../../configs/mongoDB_connection';
import {ICreateAreaRepository} from '../../../controllers/Area/createArea/protocols'
import { Area } from '../../../models/Area';
export class CreateAreaRepository implements ICreateAreaRepository {
    async createOneArea(area_name: {area_name: string}[]): Promise<Area> {
        console.log(area_name)
        const {insertedId} = await logBookDB.collection('areas').insertOne(area_name[0])
        const area = await logBookDB.collection<Omit<Area, 'id'>>('areas').findOne({_id: insertedId})
        if(!area){
            throw new Error('Area not created')
        }
        const {_id, ...rest} = area
        return {id: _id.toHexString(), ...rest}
    }
    async createAreas(area_name: {area_name: string}[]): Promise<Area[]> {
        const area_name_obj: {area_name: string}[] = [] 
        area_name.map((area)=> {
          area_name_obj.push(area)  
        })
        const {insertedIds} = await logBookDB.collection('areas').insertMany(area_name_obj)
        //const areas = logBookDB.collection('areas').find({_id: {$in: insertedIds}})
        return [{
            id: '123',
            area_name: 'software'
        }]

    }
}
