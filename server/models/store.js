import mongoose from "mongoose";

let storeSchema = mongoose.Schema({
  store_url: { type: String },
  installed_at: { type: Date },
  access_token: { type: String },
  status: {type: String,
  enum: ['INSTALLED', 'KYC_INITIATED', 'KYC_COMPLETED' , 'PLAN_SELECTED', 'PAYMENT_DONE']},
  shopify_id: { type: Number },
  name: { type: String },
  email: { type: String },
  plan: {
    plan_name: String,
    created_at: Date,
    updated_at: Date,
  },
});

export default mongoose.model("Store", storeSchema);
