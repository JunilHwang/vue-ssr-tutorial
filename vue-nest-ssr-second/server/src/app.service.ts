import { Injectable } from '@nestjs/common';
import { createBundleRenderer } from 'vue-server-renderer'
import { join } from 'path'
import { readFileSync } from 'fs'

const bundlePath = join(__dirname, '../../resources/vue-ssr-server-bundle.json')
const templatePath = join(__dirname, '../../resources/templates/dist/index.hbs')
const template = readFileSync(templatePath, 'utf-8')

console.log(template)

@Injectable()
export class AppService {

  getSSR (context: object): Promise<string> {
    const renderer = createBundleRenderer(bundlePath, { runInNewContext: false, template })
    return renderer.renderToString(context)
  }
}
