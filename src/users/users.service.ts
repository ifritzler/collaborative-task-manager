import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { hashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const existingUser = await this.userRepository
        .createQueryBuilder('user')
        .where('user.email = :email OR user.username = :username;', {
          email: createUserDto.email,
          username: createUserDto.username,
        })
        .getOne();
      if (existingUser) {
        throw new BadRequestException({}, 'User already exists');
      }
    } catch (e: any) {
      throw e;
    }
    createUserDto.password = await this.hashPassword(createUserDto.password);
    await this.userRepository.insert(createUserDto);
    return createUserDto;
  }

  async findAll() {
    const [users] = await this.userRepository.findAndCount({
      select: {
        id: true,
        uuid: true,
        firstName: true,
        lastName: true,
        email: true,
        isActive: true,
        username: true,
      },
    });
    return users;
  }

  async findOne(uuid: string) {
    try {
      const user = await this.userRepository
        .createQueryBuilder('user')
        .where('user.uuid = :uuid AND user.isActive = :active;', {
          uuid,
          active: true,
        })
        .getOne();
      console.log(user);
      return user;
    } catch (e: any) {
      return null;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  private async hashPassword(userPassword: string): Promise<string> {
    const hashed = hashSync(userPassword, 10);
    return hashed;
  }
}
