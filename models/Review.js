import {model, Schema} from "mongoose";


const reviewSchema = new Schema({
  on: {$type: String},
  from: {$type: Schema.Types.ObjectId, ref: "Customer"},
  message: {$type: String},
  attachedPhoto: {$type: String}
}, {
  typeKey: "$type"
});

export const Review = model("Review", reviewSchema);
