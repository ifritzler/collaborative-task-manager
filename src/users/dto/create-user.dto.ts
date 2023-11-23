import { v4 as uuid } from 'uuid';
import {
  IsString,
  IsOptional,
  IsUUID,
  IsEmail,
  IsBoolean,
  MinLength,
  IsStrongPassword,
} from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto implements Partial<User> {
  @IsOptional()
  @IsUUID('4')
  uuid: string = uuid();
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  username: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  @MinLength(8)
  password: string;
  @IsBoolean()
  isActive: boolean = true;
}
