import { Company } from "../../../models/Company";
import { HTTPresponse } from "../../types/globalProtocols";

export interface CreateCompanyController {
    handle(): Promise<HTTPresponse<Company>>
}

export interface CreateCompanyRepository {
    createCompany(): Promise<Company>
}