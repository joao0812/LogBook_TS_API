import mongoose from "mongoose";
import { IDeleteCompanyRepository } from "../../../controllers/Company/deleteCompany/protocols";
import { Company, companyModel } from "../../../models/Company";
import areaModel from "../../../models/Area";
import positionModel from "../../../models/Positon";
import userModel from "../../../models/User";

export class DeleteCompanyRepository implements IDeleteCompanyRepository {
    async removeCompany(id: string): Promise<Company> {
        const company = await companyModel.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)}).lean()
        
        if (!company){
            throw new Error('Erro to delete company')
        }
        
        const {_id, ...rest} = company

        const area = await areaModel.deleteMany({company_id: {_id: _id}})
        const position = await positionModel.deleteMany({company_id: {_id: _id}})
        const user = await userModel.deleteMany({company_id: {_id: _id}})

        return {id: _id.toHexString(), ...rest}
    }
}