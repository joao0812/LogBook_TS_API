import logBookDB from "../../../configs/mongoDB_connection";
import { ICreateCompanyRepository } from "../../../controllers/Company/createCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class CreateCompanyRepository implements ICreateCompanyRepository {
    async createCompany(company_name: {name: string}): Promise<Company> {
        
        /* const {insertedId} = await logBookDB.collection<Omit<Company, 'id'>>('companies').insertOne(company_name) */
        let cp = new companyModel(company_name)
        
        let doc = await cp.save()
        console.log(doc)
        /* const company = await logBookDB.collection<Omit<Company, 'id'>>('companies').findOne({_id: insertedId})
        console.log(insertedId) */

        if(!doc){
            throw new Error("Erro to try add company");
        }

        //const {_id, ...rest} = company
        const {_id, ...rest} = doc
        
        
        //return {id: _id.toHexString(), ...rest}
        return {id: _id.toHexString(), ...rest}
    }
}