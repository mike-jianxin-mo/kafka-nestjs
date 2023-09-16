import { Controller, ValidationPipe } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class ReceiverController {
  @EventPattern('hero.action.coming')
  receiveHi(@Payload(ValidationPipe) data: any) {
    console.log(`receiving...`);
    console.log(data);
    console.log(data.date);
    console.log(ValidationPipe);
    return 'I got the message';
  }
}
