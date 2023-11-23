import { Controller, Get } from '@nestjs/common';

type HealthResponse = {
  success: boolean;
};

@Controller()
export class AppController {
  @Get('/health')
  healthCheck(): HealthResponse {
    return {
      success: true,
    };
  }
}
