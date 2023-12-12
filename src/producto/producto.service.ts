import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './interfaces/Producto';
import { CreateProductDto } from './dto/create.product.dto';
import { CreateMarcaDto } from './dto/create.marca.dto';
import { Marca } from './interfaces/Marca';
import { Resenia } from './interfaces/Resenia';
import { CreateReseniaDto } from './dto/create.resenia.dto';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel('Producto') private productModel: Model<Product>,
    @InjectModel('Marca') private marcaModel: Model<Marca>,
    @InjectModel('Resenia') private reseniaModel: Model<Resenia>,
  ) {}

  //producto
  async getProduct() {
    return await this.productModel.find();
  }

  async createProduct(product: CreateProductDto) {
    const newProduct = new this.productModel(product);
    return await newProduct.save();
  }

  //Marca

  async createMarca(marca: CreateMarcaDto) {
    const newMarca = new this.marcaModel(marca);
    return await newMarca.save();
  }

  async getMarca() {
    return await this.marcaModel.find();
  }

  //resenia
  async createResenia(resenia: CreateReseniaDto) {
    const newMarca = new this.marcaModel(resenia);
    return await newMarca.save();
  }

  async getResenia(_id: string, id_producto: string) {
    return await this.reseniaModel.find({
      where: {
        id_usuario: _id,
        id_producto: id_producto,
      },
    });
  }
}
