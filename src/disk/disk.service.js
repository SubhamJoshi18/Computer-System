"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diskService = void 0;
const common_1 = require("@nestjs/common");
const cpu_service_1 = require("../cpu/cpu.service");
const power_service_1 = require("../powerSupply/power.service");
let diskService = class diskService {
    constructor(cpu, power) {
        this.cpu = cpu;
        this.power = power;
    }
    getData() {
        console.log('Generating the Power From Power Supply');
        const wait = this.power.supplyPower(20);
        console.log(wait);
        const againWait = this.cpu.Compute(20, 10);
        console.log(againWait);
        console.log('DISK MANAGEMENT IS READY TO SET FOR RAM');
    }
};
diskService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [cpu_service_1.CpuService, power_service_1.powerService])
], diskService);
exports.diskService = diskService;
