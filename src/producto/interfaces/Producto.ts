import { Document } from 'mongoose';

export interface Product extends Document {
  nombre: string;
  precio: string;
  peso: string;
  id_marca: string;
  ingrediente: string;
  declaracion: string;
  fechapublicacion: string;
  fechaproximo: string;
  stock: number;
  imagen: string;
  status:boolean
}
