import { Company } from "../../../models/Company";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IUpdateCompanyController {
    handle(): Promise<HTTPresponse<Company>>
}

export interface IUpdateCompanyRepository {
    updateCompany(id: string, body: Company): Promise<Company[]>
}