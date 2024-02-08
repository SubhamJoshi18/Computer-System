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
exports.CpuService = void 0;
const common_1 = require("@nestjs/common");
const power_service_1 = require("../powerSupply/power.service");
let CpuService = class CpuService {
    constructor(power) {
        this.power = power;
    }
    Compute(a, b) {
        this.power.supplyPower(10);
        console.log('Cpu is generating from the power given by Power Service');
        return a + b;
    }
};
CpuService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [power_service_1.powerService])
], CpuService);
exports.CpuService = CpuService;
