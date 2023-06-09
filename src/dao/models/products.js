import mongoose from "mongoose";

const productsCollection = "products";

const productsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["conservas", "comestibles", "limpieza", "libros", "bazar","electronics"],
    default: "electronics",
  },
  thumbnails: {
    type: Array,
    default: [],
  },
});

const productsModel = mongoose.model(productsCollection, productsSchema);

export default productsModel;
