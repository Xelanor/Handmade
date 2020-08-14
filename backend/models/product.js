const mongoose = require("mongoose");
require("mongoose-double")(mongoose);
const URLSlugs = require("mongoose-url-slugs");

const Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
    },
    originalPrice: {
      type: SchemaTypes.Double,
      required: true,
    },
    discountPrice: {
      type: SchemaTypes.Double,
    },
    images: [String],
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rating: {
      type: SchemaTypes.Double,
      default: 0,
    },
    description: {
      type: String,
    },
    features: {
      type: Map,
      of: String,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.plugin(URLSlugs("name", { update: true }));

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
