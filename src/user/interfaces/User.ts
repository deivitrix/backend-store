import { Document } from 'mongoose';

export interface User extends Document {
  _id:string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  correo: string;
  password: string;
  tipo_usuario: string;
  status: boolean;
}
