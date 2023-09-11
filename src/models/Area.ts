import mongoose from "mongoose";

export interface Area {
  id: string;
  area_name:  string
  company_id: mongoose.Types.ObjectId
}
