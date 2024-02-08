import { Module } from '@nestjs/common';
import { powerService } from './power.service';

@Module({
  providers: [powerService],
  exports: [powerService],
})
export class PowerModule {}
