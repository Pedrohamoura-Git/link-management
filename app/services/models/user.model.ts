import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  updateDate: { type: Date },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
type UserSchemaType = typeof userSchema extends mongoose.Schema<infer T>
  ? T
  : any;

export type { UserSchemaType };
export default User;
