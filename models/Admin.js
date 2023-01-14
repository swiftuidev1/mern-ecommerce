import {model, Schema} from "mongoose";

const adminSchema = new Schema({
  email: {$type: String, required: true, unique: true},
  password: {$type: String, required: true, unique: true},
  cadAddProducts: {$type: Boolean, default: true},
  canAddAdmins: {$type: Boolean, default: true}
}, {
  typeKey: "$type"
});

export const Admin = model("Admin", adminSchema);