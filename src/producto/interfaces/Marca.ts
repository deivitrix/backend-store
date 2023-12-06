import { Document } from 'mongoose';

export interface Marca extends Document {
  nombre: string;
  status:boolean;
}