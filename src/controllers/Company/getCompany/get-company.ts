import { Company } from "../../../models/Company";
import { GetCompanyRepository } from "../../../repositories/Company/getCompany/mongo-get-company";
import { HTTPresponse } from "../../types/globalProtocols";
import { IGetCompanyController } from "./protocols";

export class GetCompanyController implements IGetCompanyController {
    constructor(private readonly getCompanyRepository: GetCompanyRepository) {}
    async handle(): Promise<HTTPresponse<Company>> {
        try {
            const company = await this.getCompanyRepository.getAll()
            return {
                statusCode: 200,
                body: company
            }
        } catch (error) {
            return {
                statusCode: 600,
                body: 'ERRO TO GET COMPANIES'
            }
        }
    }
}