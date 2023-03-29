import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export default class OwnerDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsBoolean()
  business: boolean;
}
