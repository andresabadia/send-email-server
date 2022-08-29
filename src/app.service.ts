import { Injectable } from '@nestjs/common';
import { EmailBodyDto } from './mail/dtos/emailBody.dto';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}
  getHello(): string {
    return 'Hello World!';
  }

  async sendEmail(emailBody: EmailBodyDto) {
    return await this.mailService.sendEmail(emailBody);
  }
}
