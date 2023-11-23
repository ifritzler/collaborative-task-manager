import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HealthCheck,
  TypeOrmHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private memory: MemoryHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.db.pingCheck('database'),
      // This would return an unhealthy response code in case our process does have more than 150MB allocated.
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
