import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Product } from './interfaces/Producto';
import { ProductoService } from './producto.service';
import { CreateProductDto } from './dto/create.product.dto';
import { Marca } from './interfaces/Marca';
import { CreateMarcaDto } from './dto/create.marca.dto';
import { Response } from 'express';

@Controller('producto')
export class ProductoController {
  constructor(private productServive: ProductoService) {}

  //producto
  @Get()
  async getProduct(@Res() res: Response) {
    try {
      const data: Product[] = await this.productServive.getProduct();
      let statusCode = 0;
      if ((await data).length == 0) {
        statusCode = 400;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: [],
          mensaje: 'No se encuentra datos',
        });
      } else {
        statusCode = 200;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: data,
          mensaje: 'Se encuentran datos',
        });
      }
    } catch (error) {
      const statusCode = 500;
      const errorMessage = 'Hubo un error en el servidor';

      res
        .status(statusCode)
        .json({ statusCode: statusCode, data: [], mensaje: errorMessage });
    }
  }

  @Post()
  async createProduct(@Body() product: CreateProductDto, @Res() res: Response) {
    try {
      const data: Marca = await this.productServive.createProduct(product);
      let statusCode = 0;
      if (Object.keys(data).length == 0) {
        statusCode = 400;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: [],
          mensaje: 'No se pudo crear el producto',
        });
      } else {
        statusCode = 200;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: data,
          mensaje: 'Creacion de producto existosa...',
        });
      }
    } catch (error) {
      const statusCode = 404;
      const errorMessage = 'Hubo un error en el servidor';
      res
        .status(statusCode)
        .json({ statusCode: statusCode, data: [], mensaje: errorMessage });
    }
  }

  @Get('marca')
  async getMarca(@Res() res: Response) {
    try {
      const data: Marca[] = await this.productServive.getMarca();
      let statusCode = 0;
      if ((await data).length == 0) {
        statusCode = 400;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: [],
          mensaje: 'No se encuentra datos',
        });
      } else {
        statusCode = 200;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: data,
          mensaje: 'Se encuentran datos',
        });
      }
    } catch (error) {
      const statusCode = 404;
      const errorMessage = 'Hubo un error en el servidor';
      res
        .status(statusCode)
        .json({ statusCode: statusCode, data: [], mensaje: errorMessage });
    }
  }

  @Post('marca')
  async createMarca(@Body() marca: CreateMarcaDto, @Res() res: Response) {
    try {
      const data: Marca = await this.productServive.createMarca(marca);
      let statusCode = 0;
      if (Object.keys(data).length == 0) {
        statusCode = 400;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: [],
          mensaje: 'No se pudo crear la marca',
        });
      } else {
        statusCode = 200;
        res.status(statusCode).json({
          statusCode: statusCode,
          data: data,
          mensaje: 'Creacion de marca existosa...',
        });
      }
    } catch (error) {
      const statusCode = 404;
      const errorMessage = 'Hubo un error en el servidor';
      res
        .status(statusCode)
        .json({ statusCode: statusCode, data: [], mensaje: errorMessage });
    }
    return;
  }

  //resenia
}
