import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'

@Injectable()
export class AppService {
  async getSSRTemplate(): Promise<string> {
    const renderer = createBundleRenderer('', {
      runInNewContext: false, // recommended
    })
    return await renderer.renderToString()
  }
}
