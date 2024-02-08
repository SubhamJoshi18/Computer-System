import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { diskService } from '../disk/disk.service';

@Controller('/computer')
export class ComputerController {
  constructor(private cpu: CpuService, private disk: diskService) {}
  @Get()
  display() {
    return [this.cpu.Compute(20, 10), this.disk.getData()];
  }
}
