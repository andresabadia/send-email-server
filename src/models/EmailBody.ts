export interface Transporter {
  host: string;
  port: number;
  user: string;
  pass: string;
}

export interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export interface EmailBody {
  transporter: Transporter;
  emailOptions: EmailOptions;
}
