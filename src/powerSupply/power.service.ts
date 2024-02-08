import { Injectable } from '@nestjs/common';

@Injectable()
export class powerService {
  supplyPower(watt: number) {
    console.log(`Supplying power of ${watt} to the Components`);
    console.log(watt + 1);
  }
}
