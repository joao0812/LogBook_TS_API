import mongoose from "mongoose";

export interface Area {
  id: string;
  name:  string
  company_id: mongoose.Types.ObjectId
}

const areaSchema = new mongoose.Schema({
  name: {type: String, required: true},
  company_id: {type: mongoose.Schema.Types.ObjectId, ref:'Company', required: true}
})

const areaModel = mongoose.model('Area', areaSchema)

export default areaModel