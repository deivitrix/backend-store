import { Document } from 'mongoose';

export interface Resenia extends Document {
  id_usuario: string;
  id_producto: string;
  resenia: string;
  status: boolean;
}
