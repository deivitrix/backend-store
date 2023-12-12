import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  direccion: String,
  telefono: String,
  correo: String,
  password: String,
  tipo_usuario: String,
  status: Boolean,
});
