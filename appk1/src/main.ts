import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import configuration from './configuration';

async function bootstrap() {
  const config = configuration();
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['localhost:29092'],
      },
    },
  });

  const globalPrefix = 'salems/api';
  app.setGlobalPrefix(globalPrefix);

  await app.startAllMicroservices();

  const server = await app.listen(config.server.port, () => {
    Logger.log(
      `Listening at http://localhost:${config.server.port}/${globalPrefix}`,
    );
  });
  server.setTimeout(config.server.timeout);
}
bootstrap();
