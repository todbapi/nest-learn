import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('store')
  store(@Body() data): any {
    console.log(data);
    return this.appService.store(data);
  }

  @Get('get')
  getData(): any {
    return this.appService.read();
  }
}
