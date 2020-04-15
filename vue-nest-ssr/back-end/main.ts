import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '../resources/static'));
  app.setBaseViewsDir(join(__dirname, '../resources/template'));
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
