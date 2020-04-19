import { Controller, Get, Render, Req, Res } from '@nestjs/common'
import { AppService } from './app.service'
import { Request, Response } from "express"
import { UserService } from './api/user/user.service'

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
      isCSR: '<div id="app"></div>',
      title: 'SSR Success'
    }
  }

  @Get('/user')
  async getUser (@Req() req: Request, @Res() res: Response) {
    const user = this.userService.getUser()
    const context = {
      url: req.url,
      user,
      title: `${user.name} | 사용자 정보`,
      isCSR: ''
    }
    res.end(await this.appService.getSSR(context))
  }
}
