import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/producto.schema';
import { MarcaSchema } from './schemas/marca.schema';
import { ReseniaSchema } from './schemas/resenia.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Producto', schema: ProductSchema },
      { name: 'Marca', schema: MarcaSchema },
      { name: 'Resenia', schema: ReseniaSchema },
    ]),
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
