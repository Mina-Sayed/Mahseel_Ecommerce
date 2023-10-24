import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
// import * as path from 'path';

async function bootstrap() {
  dotenv.config({
    // path: path.resolve(__dirname, '../config', 'development.env'),
  });

  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

  app.enableCors(); // Enable CORS for all origins

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
bootstrap();
