import { IsNumber, IsString } from 'class-validator';

export class TransporterDto {
  @IsString()
  host: string;

  @IsNumber()
  port: number;

  @IsString()
  user: string;

  @IsString()
  pass: string;
}
