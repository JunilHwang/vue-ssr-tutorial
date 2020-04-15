import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'
import { join } from 'path'

@Injectable()
export class AppService {
  getSSRTemplate(context: object): Promise<string> {
    const renderer = createBundleRenderer(join(__dirname, '../static/vue-ssr-server-bundle.json'), {
      runInNewContext: false
    })
    return renderer.renderToString(context)
  }
}
