import { Injectable } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { diskService } from '../disk/disk.service';

@Injectable()
export class ComputeService {
  constructor(
    private diskService: diskService,
    private cpuService: CpuService,
  ) {}

  run() {
    this.cpuService.Compute(10, 20);
    console.log('Now for Disk');
    this.diskService.getData();
  }
}
