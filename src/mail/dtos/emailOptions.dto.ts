import { IsEmail, IsString } from 'class-validator';

export class EmailOptionsDto {
  @IsString()
  from: string;

  @IsString()
  replyTo: string;

  @IsEmail()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  text: string;

  html?: string;
}
