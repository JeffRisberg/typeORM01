import { IsString, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  date: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;
}
