import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  nombre: String,
  precio: String,
  peso: String,
  id_marca: String,
  ingrediente: String,
  declaracion: String,
  fechapublicacion: String,
  fechaproximo: String,
  stock: Number,
  imagen: String,
  status:Boolean
});
