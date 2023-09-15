import mongoose from "mongoose";

export interface User {
  id: string;
  name: string;
  surName: string;
  email: string;
  password: string;
  adimission: string;
  company_id: mongoose.Types.ObjectId;
  area_id: mongoose.Types.ObjectId;
  position_id: mongoose.Types.ObjectId;
  title?: string;
  profileImage?: File;
}

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    surName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    adimission: {type: String, required: true},
    company_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true},
    area_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Area', required: true},
    position_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Position', required: true},
    title: {type: String, default: '--'},
    profileImage: {type: Buffer}

})

const userModel = mongoose.model('User', userSchema)
export default userModel
