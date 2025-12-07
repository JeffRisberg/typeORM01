import { IsString, IsOptional, IsNumber, IsDateString } from 'class-validator';

export class UpdateExpenseDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsDateString()
  @IsOptional()
  date?: string;

  @IsNumber()
  @IsOptional()
  amount?: number;
}
