import { IGetCompanyRepository } from "../../../controllers/Company/getCompany/protocols";
import { Company, companyModel } from "../../../models/Company";

export class GetCompanyRepository implements IGetCompanyRepository {
  async getAll(): Promise<Company[]> {
    const company = await companyModel.find().lean();
    if (!company) {
      throw new Error("Company not found");
    }
    return company.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
