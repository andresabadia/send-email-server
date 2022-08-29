import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailBodyDto } from './mail/dtos/emailBody.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendEmail(@Body() emailBody: EmailBodyDto) {
    // console.log(emailBody);
    // return true;
    return await this.appService.sendEmail(emailBody);
  }
}
