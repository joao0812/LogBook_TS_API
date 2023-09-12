import { Company } from "../../../models/Company";
import { HTTPresponse } from "../../types/globalProtocols";

export interface IGetCompanyController {
    handle(): Promise<HTTPresponse<Company>>
}


export interface IGetCompanyRepository{
    getAll(): Promise<Company[]>
}