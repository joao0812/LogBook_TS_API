import mongoose from "mongoose";
import { IUpdateUserRepository } from "../../../controllers/User/updateUser/protocols";
import userModel, { User } from "../../../models/User";

export class UpdateUserRepository implements IUpdateUserRepository {
  async updateUser(id: string, body: Omit<User, "id">): Promise<User> {
    const newUser = await userModel.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      body
    );
    const user = await userModel
      .findOne({ _id: new mongoose.Types.ObjectId(id) })
      .lean()
      .populate("company_id")
      .populate("area_id")
      .populate("position_id");
    if (!user) {
      throw new Error("Erro to try update user");
    }

    const { _id, ...rest } = user;

    return { id: _id.toHexString(), ...rest };
  }
}
