"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const computer_mode_1 = require("./computer/computer.mode");
async function bootstrap() {
    const app = await core_1.NestFactory.create(computer_mode_1.ComputerModel);
    await app.listen(3000);
}
