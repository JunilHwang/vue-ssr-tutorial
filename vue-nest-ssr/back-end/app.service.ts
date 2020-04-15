import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'
import path from 'path'
import fs from 'fs'

@Injectable()
export class AppService {
  async getSSRTemplate(): Promise<string> {
    console.log(path.join(__dirname, '../public/ssr.html'))
    const renderer = createBundleRenderer(path.join(__dirname, '../static/vue-ssr-server-bundle.json'), {
      runInNewContext: false,
      template: fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf-8')
    })
    return await renderer.renderToString()
  }
}
