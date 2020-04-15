import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'
import path from 'path'
import fs from 'fs'

@Injectable()
export class AppService {
  getSSRTemplate(context: object): Promise<string> {
    const renderer = createBundleRenderer(path.join(__dirname, '../static/vue-ssr-server-bundle.json'), {
      runInNewContext: false
    })
    return renderer.renderToString(context)
  }
}
