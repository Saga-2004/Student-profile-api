import mongoose from "mongoose";
import { type } from "os";

let userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  profile_pic: {
    type: String,
  },
});

let User = mongoose.model("users", userSchema);

export default User;
