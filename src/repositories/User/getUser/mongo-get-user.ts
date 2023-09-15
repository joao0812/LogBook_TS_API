import mongoose from "mongoose";
import { IUserGetRespository } from "../../../controllers/User/getUser/protocols";
import userModel, { User } from "../../../models/User";

export class UserGetRespository implements IUserGetRespository {
  async getUsers(): Promise<User[]> {
    const user = await userModel
      .find()
      .lean()
    if (!user) {
      throw new Error("Users not found");
    }
    return user.map(({ _id, ...rest }) => ({ id: _id.toHexString(), ...rest }));
  }
  async getUser(id: string): Promise<User> {
    const user = await userModel
      .findById(new mongoose.Types.ObjectId(id))
      .lean()
      .populate("company_id")
      .populate("area_id")
      .populate("position_id");
    if (!user) {
      throw new Error(`ERROR! user ${id} not found`);
    }
    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
