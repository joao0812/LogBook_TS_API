import mongoose from "mongoose"

export interface Company {
    id: string,
    name: string
}

const companySchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}
})

export const companyModel = mongoose.model('Company', companySchema)