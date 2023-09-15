import { IUserCreateRepository } from "../../../controllers/User/createUser/protocols";
import userModel, { User } from "../../../models/User";

export class UserCreateRepository implements IUserCreateRepository {
  async createUser(body: Omit<User, "id">): Promise<User> {
    const user = new userModel(body);
    const doc = await user.save();
    const userInserted = await userModel
      .findOne({ _id: doc._id })
      .lean()
      .populate("company_id")
      .populate("area_id")
      .populate("position_id");
    console.log(userInserted);
    if (!doc || !userInserted) {
      throw new Error("User not created");
    }
    const { _id, ...rest } = userInserted;
    return { id: _id.toHexString(), ...rest };
  }
}
