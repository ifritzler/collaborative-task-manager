import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class TypeOrmConfigService {
  private static instance: TypeOrmConfigService = null;
  private constructor(private readonly configService: ConfigService) {}

  static factory(configService: ConfigService) {
    if (!this.instance) {
      this.instance = new TypeOrmConfigService(configService);
    }
    return this.instance.createTypeOrmOptions();
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      synchronize: this.configService.get<boolean>('database.synchronize'),
      type: 'postgres',
      autoLoadEntities: true,
    };
  }
}
