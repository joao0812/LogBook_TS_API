import { Company } from "../../../models/Company";
import { CreateCompanyRepository } from "../../../repositories/Company/createCompany/mongo-create-company";
import { HTTPresponse } from "../../types/globalProtocols";
import {
  ICreateCompanyController,
  ICreateCompanyRepository,
} from "./protocols";

export class CreateCompanyController implements ICreateCompanyController {
  constructor(
    private readonly createCompanyRepository: CreateCompanyRepository, private readonly company_body: Omit<Company, 'id'>
  ) {}
  async handle(): Promise<HTTPresponse<Company>> {
    try {        
      const company = await this.createCompanyRepository.createCompany(this.company_body);
      return {
        statusCode: 200,
        body: company,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: String(error),
      };
    }
  }
}
