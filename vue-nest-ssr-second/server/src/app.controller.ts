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

  @Get(['/', '/about'])
  @Render('index')
  async getHome (@Req() req: Request) {
    return {
      content: '<div id="app"></div>',
      title: 'SSR Success'
    }
  }

  @Get('/user')
  @Render('index')
  async getUser (@Req() req: Request) {
    const user = this.userService.getUser()
    return {
      content: await this.appService.getSSR({ url: req.url, user }),
      title: `${user.name} | UserInfo`,
    }
  }
}
