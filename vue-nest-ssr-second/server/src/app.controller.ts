import {Controller, Get, Render, Req} from '@nestjs/common';
import { AppService } from './app.service';
import {Request} from "express";
import {UserService} from "./api/user/user.service";

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly userService: UserService
  ) {}

  @Get('*')
  @Render('index')
  async getHello (@Req() req: Request) {
    return {
      content: await this.appService.getSSR({ url: req.url }),
      title: 'SSR Success',
      user: this.userService.getUser()
    }
  }
}
