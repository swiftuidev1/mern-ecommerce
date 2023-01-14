import {model, Schema} from "mongoose";
import {nanoid} from "nanoid";

const productSchema = new Schema({
  id: {$type: String, default: nanoid},
  name: {$type: String, required: true},
  category: {$type: String}, // clothe
  subcategory: {$type: String}, // t-shirt
  photos: {$type: [String], default: []},
  color: {$type: String}, // hex
  size: {$type: String}, // XS | S | M | L | XL | 2XL | 3XL | 4XL | 5XL
  count: {$type: Number},
  price: {$type: Number} // USD
}, {typeKey: "$type"});

productSchema.index({id: 1, name: 1});

export const Product = model("Product", productSchema);
