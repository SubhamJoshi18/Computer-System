import { Module } from '@nestjs/common';
import { PowerModule } from '../powerSupply/power.module';
import { CpuModule } from '../cpu/cpu.module';
import { powerService } from '../powerSupply/power.service';
import { diskService } from './disk.service';
@Module({
  providers: [diskService],
  imports: [PowerModule, CpuModule],
  exports: [diskService],
})
export class diskModule {}
