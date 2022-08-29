import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { EmailOptionsDto } from './emailOptions.dto';
import { TransporterDto } from './transporter.dto';

export class EmailBodyDto {
  @ValidateNested({ each: true })
  @Type(() => TransporterDto)
  transporter: TransporterDto;

  @ValidateNested({ each: true })
  @Type(() => EmailOptionsDto)
  @IsArray()
  emailsOptions: EmailOptionsDto[];
}
