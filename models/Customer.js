import {model, Schema} from "mongoose";

const cartItem = new Schema({
  product: {$type: Schema.Types.ObjectId, ref: "Product"},
  count: {$type: Number, default: 1}
}, {
  typeKey: "$type"
});

const customerCart = new Schema({
  promoCode: {$type: String},
  cart: {$type: [cartItem], default: []},
  totalPrice: {$type: Number}
}, {
  typeKey: "$type"
});

const viewedProduct = new Schema({
  date: {$type: Date, default: Date.now},
  product: {$type: Schema.Types.ObjectId, ref: "Product"}
}, {
  typeKey: "$type"
});

const customerShippingAddress = new Schema({
  country: {$type: String},
  firstName: {$type: String},
  lastName: {$type: String},
  address: {$type: String},
  addressOptional: {$type: String},
  city: {$type: String},
  province: {$type: String},
  postalCode: {$type: Number},
  phone: {$type: String}
}, {
  typeKey: "$type"
});

const customerSchema = new Schema({
  ip: {$type: String},
  userAgent: {$type: String},
  name: {$type: String},
  email: {$type: String},
  shippingAddress: {$type: customerShippingAddress},
  viewed: {$type: [viewedProduct], default: []},
  favorites: {$type: [Schema.Types.ObjectId], ref: "Product", default: []},
  cart: {$type: customerCart},
  suggestions: {$type: [Schema.Types.ObjectId], ref: "Product", default: []},
}, {
  typeKey: "$type",
  timestamps: true,
});
customerSchema.index({ip: 1});
export const Customer = model("Customer", customerSchema);
