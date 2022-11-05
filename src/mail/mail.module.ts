import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST || 'smtp.example.com',
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_SECURE || true,
        auth: {
          user: process.env.SMTP_USER || 'user@example.com',
          pass: process.env.SMTP_PASS || 'topsecret',
        },
        tls: { rejectUnauthorized: process.env.SMTP_IGNORE_TLS || false },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
