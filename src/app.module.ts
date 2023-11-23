import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmHealthIndicator } from '@nestjs/terminus';
import { HealthModule } from './health/health.module';
import { TypeOrmConfigService } from './config/TypeOrmConfig';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          ...TypeOrmConfigService.factory(configService),
          entities: [User],
        };
      },
      inject: [ConfigService],
    }),
    HealthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [TypeOrmHealthIndicator],
})
export class AppModule {}
