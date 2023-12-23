import { ConfigType } from './../../node_modules/@nestjs/config/dist/types/config.type.d';
import { Inject, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';
import { join } from 'path';

import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { renameImage } from './helper/imagenes.helper';
import config from '../config';
// import {  } from "multer";
@Controller('imagen')
export class ImagenController {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  @Get(':imagenName')
  get_imagen(@Param('imagenName') imageName: string, @Res() res: Response) {
    const imagePath = join(__dirname, '..', '..', 'upload', imageName);

    if (!fs.existsSync(imagePath)) {
      return res
        .status(404)
        .send({ statusCode: 404, data: '', mensaje: 'Imagen no encontrada' });
    }

    // Devuelve la imagen al cliente
    // console.log(imagePath);

    return res.status(200).sendFile(imagePath);
  }

  //subir imagen para obtener el nombre de la imagen
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './upload',
        filename: renameImage,
      }),
    }),
  )
  uploadFial(@UploadedFile() file: Express.Multer.File) {
    return file.path;
  }
}
