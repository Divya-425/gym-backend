import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateGymDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  trainer!: string;

  @IsString()
  @IsNotEmpty()
  location!: string;

  @IsNumber()
  fees!: number;
}