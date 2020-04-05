import { Controller, Get } from '@nestjs/common';

@Controller('webhook')
export class WebhookController {

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
