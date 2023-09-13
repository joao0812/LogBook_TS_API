import { Company } from "../../../models/Company";
import { UpdateCompanyRepository } from "../../../repositories/Company/updateCompany/mongo-update-company";
import { HTTPresponse } from "../../types/globalProtocols";
import { IUpdateCompanyController } from "./protocols";

export class UpdateCompanyController implements IUpdateCompanyController {
    constructor(private readonly updateCompanyRepository: UpdateCompanyRepository, private readonly id: string, private readonly body: Company) {}
    async handle(): Promise<HTTPresponse<Company>> {
        try {
            const company = await this.updateCompanyRepository.updateCompany(this.id, this.body)
            return {
                statusCode: 200,
                body: company
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'ERRO TO UPDATE COMPANY'
            }
        }
    }
}