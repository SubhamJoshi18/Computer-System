import { Module } from '@nestjs/common';
import { CpuModule } from '../cpu/cpu.module';
import { diskModule } from '../disk/disk.module';
import { ComputerController } from './computer.controller';

@Module({
  controllers: [ComputerController],
  imports: [CpuModule, diskModule],
})
export class ComputerModel {}
