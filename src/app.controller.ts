import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailBody } from './models/EmailBody';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendEmail(@Body() emailBody: EmailBody) {
    console.log(emailBody);
    // return true;
    return await this.appService.sendEmail(emailBody);
  }
}
