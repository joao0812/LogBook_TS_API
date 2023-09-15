import mongoose from "mongoose"

export interface Position {
    id: string
    name: string
    company_id: mongoose.Types.ObjectId
}

const positionSchema = new mongoose.Schema({
    name: {type: String, required: true},
    company_id: {type: mongoose.Schema.Types.ObjectId, ref:'Company', required: true}
})

const positionModel = mongoose.model('Position', positionSchema)

export default positionModel