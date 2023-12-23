import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/User';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  //user
  async getuser(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getUser_one(_id: string): Promise<any> {
    return await this.userModel
      .findOne({ _id })
      .select('nombre apellido direccion telefono correo tipo_usuario imagen');
  }

  async getUser_login(correo: string, password: string): Promise<any> {
    return await this.userModel
      .findOne({ correo, password })
      .select('status tipo_usuario _id');
  }

  async createUser(user: CreateUserDto) {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }
}
