import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailBodyDto } from './dtos/emailBody.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(emailBody: EmailBodyDto) {
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

      for (let index = 0; index < emailBody.emailsOptions.length; index++) {
        const emailOptions = emailBody.emailsOptions[index];
        await this.mailerService.sendMail({
          transporterName,
          to: emailOptions.to,
          from: emailOptions.from,
          replyTo: emailOptions.replyTo,
          subject: emailOptions.subject,
          text: emailOptions.text,
        });
      }

      console.log('email sent: ' + emailBody.emailsOptions.length);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
