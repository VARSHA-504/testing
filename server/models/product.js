import mongoose from "mongoose";

/*Scheme for storing giftcard products */

var productSchema = mongoose.Schema({
  store_url: { type: String },
  id: { type: Number,  unique: true  },
  title: { type: String },
  body_html: { type: String },
  vendor: { type: String },
  product_type: { type: String },
  created_at: { type: Date },
  handle: { type: String },
  updated_at: { type: Date },
  published_at: { type: Date },
  template_suffix: { type: String },
  tags: { type: Array },
  published_scope: { type: String },
  variants: [
    {
      id: { type: Number },
      product_id: { type: Number },
      title: { type: String },
      price: { type: String },
      sku: { type: String },
      position: { type: Number },
      inventory_policy: { type: String },
      compare_at_price: { type: String },
      fulfillment_service: { type: String },
      inventory_management: { type: String },
      option1: { type: String },
      option2: { type: String },
      option3: { type: String },
      created_at: { type: Date },
      updated_at: { type: Date },
      taxable: { type: Boolean },
      barcode: { type: String },
      grams: { type: Number },
      image_id: { type: Number },
      inventory_quantity: { type: Number },
      weight: { type: Number },
      weight_unit: { type: String },
      inventory_item_id: { type: Number },
      old_inventory_quantity: { type: Number },
      requires_shipping: { type: Boolean },
    },
  ],
  options: [
    {
      id: { type: Number },
      product_id: { type: Number },
      name: { type: String },
      position: { type: Number },
      values: { type: Array },
    },
  ],
  images: [
    {
      id: { type: Number },
      product_id: { type: Number },
      position: { type: Number },
      created_at: { type: Date },
      updated_at: { type: Date },
      alt: { type: String },
      width: { type: Number },
      height: { type: Number },
      src: { type: String },
      variant_ids: { type: Array },
    },
  ],
  image: { type: Object },
});

export default mongoose.model("Product", productSchema);
