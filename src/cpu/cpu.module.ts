import { Module } from '@nestjs/common';
import { PowerModule } from '../powerSupply/power.module';
import { CpuService } from './cpu.service';

@Module({
  providers: [CpuService],
  imports: [PowerModule],
  exports: [CpuService],
})
export class CpuModule {}
