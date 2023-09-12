import logBookDB from "../../../configs/mongoDB_connection";
import { ICreateCompanyRepository } from "../../../controllers/Company/createCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class CreateCompanyRepository implements ICreateCompanyRepository {
    async createCompany(company_name: {name: string}): Promise<Company> {
        
        let cp = new companyModel(company_name)
        
        let doc = await cp.save()
        console.log(doc)

        if(!doc){
            throw new Error("Erro to try add company");
        }

        const {_id, ...rest} = doc
        
        return {id: _id.toHexString(), ...rest}
    }
}