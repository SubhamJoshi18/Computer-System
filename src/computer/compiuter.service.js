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
exports.ComputeService = void 0;
const common_1 = require("@nestjs/common");
const cpu_service_1 = require("../cpu/cpu.service");
const disk_service_1 = require("../disk/disk.service");
let ComputeService = class ComputeService {
    constructor(diskService, cpuService) {
        this.diskService = diskService;
        this.cpuService = cpuService;
    }
    run() {
        this.cpuService.Compute(10, 20);
        console.log('Now for Disk');
        this.diskService.getData();
    }
};
ComputeService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [disk_service_1.diskService,
        cpu_service_1.CpuService])
], ComputeService);
exports.ComputeService = ComputeService;
