import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class TransporterDto {
  @IsString()
  host: string;

  @IsNumber()
  port: number;

  @IsString()
  user: string;

  @IsString()
  pass: string;

  @IsBoolean()
  @IsOptional()
  secure: boolean;
}
