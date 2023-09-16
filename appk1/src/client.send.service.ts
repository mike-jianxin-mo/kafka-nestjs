import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

const requestPatterns = ['hero.kill.dragon'];
@Injectable()
export class SendService {
  constructor(
    @Inject('HERO_SERVICE') private readonly producerClient: ClientKafka,
  ) {}

  // onModuleInit() {
  //   requestPatterns.forEach((pattern) => {
  //     this.producerClient.subscribeToResponseOf(pattern);
  //   });
  // }

  // Also working.
  // async sayHi() {
  //   const result = await this.producerClient.emit(
  //     'hero.action.coming',
  //     JSON.stringify({ id: '009', name: 'super man' }),
  //   );
  //   console.log('++++++++++++++++');
  //   console.log(result);
  //   console.log('++++++++++++++++');
  // }

  async sayHi() {
    this.producerClient
      .emit(
        'hero.action.coming',
        JSON.stringify({
          id: '009',
          name: 'super man',
          date: new Date().toLocaleTimeString(),
        }),
      )
      .subscribe((result) => {
        console.log('++++++++++++++++');
        console.log(result);
        console.log('++++++++++++++++');
      });
  }
}
