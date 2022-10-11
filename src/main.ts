import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DesenvolvMED')
    .setDescription('API rede social - DesenvolvMED')
    .setContact('Grupo 01 - Generation Mobile 04', 'https://loxiasmegalos.github.io/Apresentacao/', 'murillo.alkantara@gmail.com')
    .setVersion('1.3')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup('/swagger', app, document)

  process.env.TZ = '-03:00'

  app.useGlobalPipes(new ValidationPipe())

  app.enableCors()

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
