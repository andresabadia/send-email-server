import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { EmailBodyDto } from './dtos/emailBody.dto';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(emailBody: EmailBodyDto) {
    try {
      const config = {
        host: emailBody.transporter?.host || process.env.SMTP_HOST,
        port: emailBody.transporter?.port || process.env.SMTP_PORT,
        secure:
          emailBody.transporter?.secure === false
            ? false
            : process.env.SMTP_SECURE === 'false'
            ? false
            : true,
        auth: {
          user: emailBody.transporter?.user || process.env.SMTP_USER,
          pass: emailBody.transporter?.pass || process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized:
            process.env.SMTP_IGNORE_TLS === 'true' ? true : false,
        },
      };
      const transporterName = this.mailerService.addTransporter('smtp', config);

      for (let index = 0; index < emailBody.emailsOptions.length; index++) {
        const emailOptions = emailBody.emailsOptions[index];

        await this.mailerService.sendMail({
          transporterName,
          to: emailOptions.to,
          from: process.env.SMTP_FROM || emailOptions.from,
          replyTo: emailOptions?.replyTo,
          subject: emailOptions.subject,
          text: emailOptions.text,
        });
      }

      console.log('email sent: ' + emailBody.emailsOptions.length);
      return true;
    } catch (error) {
      console.log('error sending email', error);
      return false;
    }
  }
}
