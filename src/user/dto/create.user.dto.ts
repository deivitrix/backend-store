import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  apellido: string;
  @IsNotEmpty()
  direccion: string;
  @IsString()
  telefono: string;
  @IsNotEmpty()
  @IsString()
  correo: string;
  @IsNotEmpty()
  password: string;
  tipo_usuario: string;
  imagen: string;
  status: boolean;
}
