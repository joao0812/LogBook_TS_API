import { Company } from "../../../models/Company";
import { HTTPresponse } from "../../types/globalProtocols";
export interface IDeleteCompanyController {
    handle(): Promise<HTTPresponse<Company>>
}


export interface IDeleteCompanyRepository {
    removeCompany(id: string): Promise<Company>
}