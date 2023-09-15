import mongoose from "mongoose";
import { IDeleteUserRepository } from "../../../controllers/User/deleteUser/protocols";
import userModel, { User } from "../../../models/User";

export class DeleteUserRepository implements IDeleteUserRepository {
  async removeUser(id: string): Promise<User> {
    const user = await userModel
      .findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) })
      .lean()
      .populate("company_id")
      .populate("area_id")
      .populate("position_id");
    if (!user) {
      throw new Error("Erro to try delete user");
    }
    const { _id, ...rest } = user;
    return { id: _id.toHexString(), ...rest };
  }
}
