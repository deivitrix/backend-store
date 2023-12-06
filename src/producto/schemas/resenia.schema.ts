import * as mongoose from 'mongoose';

export const ReseniaSchema = new mongoose.Schema({
  id_usuario: String,
  id_producto: String,
  resenia: String,
  status: Boolean,
});
