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
      title: 'Vue + Nest SSR Tutorial',
      content: '<div id="app"></div>',
      initState: null
    }
  }

  @Get('/user')
  @Render('index')
  async getUser (@Req() req: Request, @Res() res: Response) {
    const user = this.userService.getUser()
    const context = { url: req.url, user }
    const title = `${user.name} | 사용자 정보`
    const content = await this.appService.getSSR(context)
    const serialize = require('serialize-javascript')
    const initState = `
      <script>
        window.initState = {
          user: ${serialize(user)}
        }
      </script>
    `
    return { title, content, initState }
  }
}
