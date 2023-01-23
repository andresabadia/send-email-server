import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  const origins = process.env.CORS_ALLOWED?.split(';');
  app.enableCors({ origin: origins || true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
