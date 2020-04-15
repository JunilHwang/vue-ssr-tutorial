import {Controller, Get, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {Request, Response} from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  async getHome(@Req() req: Request, @Res() res: Response): Promise<void> {
    res.end(await this.appService.getSSRTemplate({ url: req.url }))
  }
}
