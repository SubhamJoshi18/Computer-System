import { Injectable } from '@nestjs/common';
import { powerService } from '../powerSupply/power.service';

@Injectable()
export class CpuService {
  constructor(private power: powerService) {}
  Compute(a: number, b: number) {
    this.power.supplyPower(10);
    console.log('Cpu is generating from the power given by Power Service');
    return a + b;
  }
}
