import logBookDB from "../../../configs/mongoDB_connection";
import { ICreateCompanyRepository } from "../../../controllers/Company/createCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class CreateCompanyRepository implements ICreateCompanyRepository {
    async createCompany(company_name: {name: string}): Promise<Company> {
        const company = new companyModel(company_name)
        const doc = await company.save()
        const companyInserted = await companyModel.findOne({_id: doc._id}).lean()
        console.log(companyInserted)
        
        if(!doc || !companyInserted){
            throw new Error("Erro to try add company");
        }
        const {_id, ...rest} = companyInserted
        return {id: _id.toHexString(), ...rest}
    }
}