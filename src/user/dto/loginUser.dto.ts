import { IsNotEmpty, IsString } from 'class-validator';
export class LoginUserDto {
  @IsNotEmpty()
  @IsString()
  correo: string;
  @IsNotEmpty()
  password: string;
}
