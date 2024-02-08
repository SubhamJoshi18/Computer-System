import { NestFactory } from '@nestjs/core';
import { ComputerModel } from './computer/computer.mode';
async function bootstrap() {
  const app = await NestFactory.create(ComputerModel);

  await app.listen(3000);
}
