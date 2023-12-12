import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/User';
import { CreateUserDto } from './dto/create.user.dto';
import { Response } from 'express';
import { LoginUserDto } from './dto/loginUser.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  // @UseGuards(JwtGuard)
  async getuser(@Res() res: Response) {
    try {
      const data: User[] = await this.userService.getuser();

      let statusCode = 0;
      if ((await data).length == 0) {
        statusCode = 400;
        res
          .status(statusCode)
          .json({ statusCode: statusCode, mensaje: 'No se encuentra datos' });
      } else {
        statusCode = 200;
        res.status(statusCode).json({ statusCode: statusCode, data: data });
      }
    } catch (error) {
      const statusCode = 500;
      const errorMessage = 'Hubo un error en el servidor';

      res.status(statusCode).json({ error: errorMessage });
    }
  }
  @Post()
  async createUser(
    @Body(new ValidationPipe()) user: CreateUserDto,
    @Res() res: Response,
  ) {
    try {
      const data: User = await this.userService.createUser(user);
      let statusCode = 0;
      if (Object.keys(data).length == 0) {
        statusCode = 400;
        res.status(statusCode).json({
          statusCode: statusCode,
          mensaje: 'No se pudo crear el usuario',
        });
      } else {
        statusCode = 200;
        res.status(statusCode).json({ statusCode: statusCode, data: data });
      }
    } catch (error) {
      const statusCode = 500;
      const errorMessage = 'Hubo un error en el servidor';

      res.status(statusCode).json({ error: errorMessage });
    }
  }

  @Post('login')
  async get_login(
    @Body(new ValidationPipe()) user: LoginUserDto,
    @Res() res: Response,
  ) {
    const data: User = await this.userService.getUser_login(
      user.correo,
      user.password,
    );
    // console.log(data);

    let statusCode = 0;
    if (data == null) {
      statusCode = 404;
      res.status(200).json({
        statusCode: statusCode,
        data: [],
        mensaje: 'El correo o password son incorrectos',
      });
      return;
    }

    if (Object.keys(data).length == 0) {
      statusCode = 404;
      res.status(200).json({
        statusCode: statusCode,
        data: [],
        mensaje: 'No se pudo encontrar el usuario',
      });
    } else {
      statusCode = 200;
      if (data.status == true) {
        res.status(statusCode).json({
          statusCode: statusCode,
          mensaje: 'Login existoso.. ',
          data: data,
        });
      } else {
        statusCode = 200;
        res.status(200).json({
          statusCode: statusCode,
          data: 'El usuario no encuentra activo',
        });
      }
    }
    // } catch (error) {
    //   const statusCode = 404;
    //   const errorMessage = 'No se encontro el usuario';

    //   res.status(200).json({ statusCode: statusCode, data: errorMessage });
    // }
  }
}
