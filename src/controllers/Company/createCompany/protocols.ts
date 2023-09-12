import { Company } from "../../../models/Company";
import { HTTPresponse } from "../../types/globalProtocols";

export interface ICreateCompanyController {
    handle(): Promise<HTTPresponse<Company>>
}

export interface ICreateCompanyRepository {
    createCompany(company_name: {name: string}): Promise<Company>
}