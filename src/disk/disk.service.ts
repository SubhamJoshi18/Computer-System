import { Injectable } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { powerService } from '../powerSupply/power.service';

@Injectable()
export class diskService {
  constructor(private cpu: CpuService, private power: powerService) {}

  getData() {
    console.log('Generating the Power From Power Supply');
    const wait = this.power.supplyPower(20);
    console.log(wait);

    const againWait = this.cpu.Compute(20, 10);
    console.log(againWait);

    console.log('DISK MANAGEMENT IS READY TO SET FOR RAM');
  }
}
