import { IsInt, IsNotEmpty, Min } from 'class-validator';

export default class AccountDto {
  @IsNotEmpty()
  @IsInt()
  @Min(1000000000000000, { message: 'short banknumber' })
  accountNumber: number;

  @IsNotEmpty()
  @IsInt()
  balance: number;
}
