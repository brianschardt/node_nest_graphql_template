import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ENV } from './shared/configs/env.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(ENV.PORT);
  Logger.verbose(`Server running on http://localhost:${ENV.PORT}`, 'Bootstrap');
}
bootstrap();
