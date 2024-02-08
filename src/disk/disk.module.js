"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diskModule = void 0;
const common_1 = require("@nestjs/common");
const power_module_1 = require("../powerSupply/power.module");
const cpu_module_1 = require("../cpu/cpu.module");
const disk_service_1 = require("./disk.service");
let diskModule = class diskModule {
};
diskModule = __decorate([
    common_1.Module({
        providers: [disk_service_1.diskService],
        imports: [power_module_1.PowerModule, cpu_module_1.CpuModule],
        exports: [disk_service_1.diskService],
    })
], diskModule);
exports.diskModule = diskModule;
