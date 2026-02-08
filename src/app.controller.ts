import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('insert')
  async insertName(@Query('name') name: string) {
    // Default to 'World' if name is missing
    const finalName = name || 'World';
    return this.appService.callInsertProcedure(finalName);
  }
}