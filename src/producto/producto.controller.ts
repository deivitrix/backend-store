import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from './interfaces/Producto';
import { ProductoService } from './producto.service';
import { CreateProductDto } from './dto/create.product.dto';
import { Marca } from './interfaces/Marca';

@Controller('producto')
export class ProductoController {
  constructor(private productServive: ProductoService) {}

  @Get()
  getProduct(): Promise<Product[]> {
    return this.productServive.getProduct();
  }

  @Post()
  createProduct(@Body() product: CreateProductDto): Promise<Product> {
    return this.productServive.createProduct(product);
  }

  @Get('marca')
  getMarca(): Promise<Marca[]> {
    return this.productServive.getMarca();
  }
}
