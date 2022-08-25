import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailBody } from 'src/models/EmailBody';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(emailBody: EmailBody) {
    try {
      const transporterName = this.mailerService.addTransporter('smtp', {
        host: emailBody.transporter.host,
        port: emailBody.transporter.port,
        secure: true,
        auth: {
          user: emailBody.transporter.user,
          pass: emailBody.transporter.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      await this.mailerService.sendMail({
        transporterName,
        to: emailBody.emailOptions.to,
        from: emailBody.emailOptions.from,
        subject: emailBody.emailOptions.subject,
        text: emailBody.emailOptions.text,
      });
      console.log('email sent?');
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
