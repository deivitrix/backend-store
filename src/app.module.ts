import { ConfigType } from './../node_modules/@nestjs/config/dist/types/config.type.d';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagenModule } from './imagen/imagen.module';
import { ConfigModule } from '@nestjs/config';
// import * as joi from 'joi';

import { environments } from './environments';
import config from './config';
import { MulterModule } from '@nestjs/platform-express';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
    }),
    ProductoModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [config.KEY],
      useFactory: async (configService: ConfigType<typeof config>) => {
        return {
          uri: configService.BASE_DATOS,
        };
      },
    }),
    ImagenModule,
    MulterModule.register({
      dest: './upload',
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
