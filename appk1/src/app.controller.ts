import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendService } from './client.send.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sendService: SendService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('sayHi')
  sendMessage() {
    return this.sendService.sayHi();
  }
}
