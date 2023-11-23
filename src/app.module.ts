import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmHealthIndicator } from '@nestjs/terminus';
import { HealthModule } from './health/health.module';
import { TypeOrmConfigService } from './config/TypeOrmConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return TypeOrmConfigService.factory(configService);
      },
      inject: [ConfigService],
    }),
    HealthModule,
  ],
  controllers: [],
  providers: [TypeOrmHealthIndicator],
})
export class AppModule {}
