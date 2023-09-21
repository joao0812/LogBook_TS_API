import mongoose from "mongoose";
import { IUpdateCompanyRepository } from "../../../controllers/Company/updateCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class UpdateCompanyRepository implements IUpdateCompanyRepository {
  async updateCompany(
    id: string,
    body: Company
  ): Promise<Company[]> {
    const oldCompany = await companyModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });
    const company = await companyModel.updateOne<Omit<Company, "id">>(
      { _id: new mongoose.Types.ObjectId(id) },
      body
    );
    const newCompany = await companyModel.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!oldCompany || !newCompany) {
        throw new Error('ERRO TO UPDATE COMPANY')
    }

    return [
      {
        id: oldCompany._id.toHexString(),
        name: oldCompany.name,
        password: oldCompany.password
      },
      {
        id: newCompany._id.toHexString(),
        name: newCompany.name,
        password: newCompany.password        
      },
    ];
  }
}
