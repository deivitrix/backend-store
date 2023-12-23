import { Module } from '@nestjs/common';
import { ImagenController } from './imagen.controller';
import { ImagenService } from './imagen.service';

@Module({
  controllers: [ImagenController],
  providers: [ImagenService],
})
export class ImagenModule {}
