import { Document } from 'mongoose';

export interface Product extends Document {
  nombre: string;
  precio: string;
  peso: string;
  id_marca: string;
  ingrediente: string;
  declaracion: string;
  fecha: string;
  stock: number;
  imagen: string;
  status:boolean
}
