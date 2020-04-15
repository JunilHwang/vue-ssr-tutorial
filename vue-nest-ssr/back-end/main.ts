import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import express from 'express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const staticPath: string = join(__dirname, '../resources/static')
  // app.useStaticAssets(staticPath);
  app.setBaseViewsDir(join(__dirname, '../resources/templates'));
  app.setViewEngine('hbs');
  app.use('/static', express.static(staticPath, {
    cacheControl: true,
    maxAge: 3600 * 1000,
    etag: false
  }));
  await app.listen(3000);
}
bootstrap();
