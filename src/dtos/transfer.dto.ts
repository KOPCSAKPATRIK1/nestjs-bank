import { IsInt, Min } from 'class-validator';

export default class TransferDto {
  @Min(0)
  @IsInt()
  amount: number;
}
