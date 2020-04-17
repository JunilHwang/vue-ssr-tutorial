import {Controller, Get, Render, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  @Render('index')
  async getHello (@Req() req: Request) {
    console.log(req.url)
    return {
      content: await this.appService.getSSR({ url: req.url }),
      title: 'SSR Success'
    }
  }
}
