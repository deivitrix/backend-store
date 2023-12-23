import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Reemplaza con el origen de tu aplicación Angular
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

  app.use(express.static('/upload/')); // mindware para poner la carpeta de upload static
  await app.listen(3000);
}
bootstrap();
