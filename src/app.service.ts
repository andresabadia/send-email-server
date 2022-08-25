import { Injectable } from '@nestjs/common';
import { MailService } from './mail/mail.service';
import { EmailBody } from './models/EmailBody';

@Injectable()
export class AppService {
  constructor(private mailService: MailService) {}
  getHello(): string {
    return 'Hello World!!!';
  }

  async sendEmail(emailBody: EmailBody) {
    return await this.mailService.sendEmail(emailBody);
  }
}
