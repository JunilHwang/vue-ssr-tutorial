import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path'
import * as express from 'express'
import { NestExpressApplication } from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const staticPath = join(__dirname, '../../resources/static')
  app.setBaseViewsDir(join(__dirname, '../../resources/templates/dist'))
  app.setViewEngine('hbs')
  app.use('/static', express.static(staticPath, {
    cacheControl: true,
    maxAge: 3600 * 1000,
    etag: false
  }))
  await app.listen(3000);
}
bootstrap();
