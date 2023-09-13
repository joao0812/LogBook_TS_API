import { Company } from "../../../models/Company";
import { DeleteCompanyRepository } from "../../../repositories/Company/deleteCompany/mongo-delete-company";
import { HTTPresponse } from "../../types/globalProtocols";
import { IDeleteCompanyController } from "./protocols";

export class DeleteCompanyController implements IDeleteCompanyController {
  constructor(
    private readonly deleteCompanyRepository: DeleteCompanyRepository,
    private readonly id: string
  ) {}
  async handle(): Promise<HTTPresponse<Company>> {
    try {
      const compay = await this.deleteCompanyRepository.removeCompany(this.id);
      return {
        statusCode: 200,
        body: compay,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Error to delete company',
      };
    }
  }
}
