import mongoose from "mongoose";
import { IDeleteCompanyRepository } from "../../../controllers/Company/deleteCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class DeleteCompanyRepository implements IDeleteCompanyRepository {
    async removeCompany(id: string): Promise<Company> {
        const company = await companyModel.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}).lean()

        if (!company){
            throw new Error('Erro to delete company')
        }

        const {_id, ...rest} = company

        return {id: _id.toHexString(), ...rest}
    }
}