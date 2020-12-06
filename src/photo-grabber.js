import fetch from 'node-fetch'
import findImages from './find-images.js'
import buildImageUrls from './build-image-urls.js'
import downloadImage from './download-image.js'
import Listr from 'listr'
import Url from 'url'
import path from 'path'
import VerboseRenderer from 'listr-verbose-renderer'

export default async (options) => {
  const tasks = new Listr(
    [
      {
        title: `fetching ${options.url}`,
        task: async (context, task) => {
          context.response = await fetch(context.url)
          task.output = `status: ${context.response.status}`
        },
      },
      {
        title: `downloading page body`,
        task: async (context, task) => {
          context.text = await context.response.text()
          task.output = `size: ${context.text.length} chars`
        },
      },
      {
        title: `finding images`,
        task: async (context, task) => {
          context.images = findImages(context.text, context.regex)
          task.output = `image count: ${context.images.length}`
        },
      },
      {
        title: `formatting image urls`,
        task: async (context, task) => {
          context.imagesUrls = buildImageUrls(context.images, context.suffix)
        },
      },
      {
        title: 'Downloading images',
        task: (context) => {
          return new Listr(
            context.imagesUrls.map((imageUrl) => ({
              title: imageUrl,
              task: (context) => {
                context[imageUrl] = {}
                context[imageUrl].filename = Url.parse(imageUrl)
                  .pathname.split('/')
                  .pop()
                context[imageUrl].savePath = path.join(
                  context.saveDir,
                  context[imageUrl].filename
                )
                return new Listr([
                  {
                    title: 'fetching',
                    task: async (context, task) => {
                      context[imageUrl].response = await fetch(imageUrl)
                      task.output = `status: ${context[imageUrl].response.status}`
                    },
                  },
                  {
                    title: `saving`,
                    task: async (context, task) => {
                      task.output = `saving to ${context[imageUrl].savePath}`
                      const bytes = await downloadImage(
                        context[imageUrl].response,
                        context[imageUrl].savePath
                      )
                      task.output = `saved ${bytes} bytes`
                    },
                  },
                ])
              },
            }))
          )
        },
      },
    ],
    {
      renderer: VerboseRenderer,
    }
  )

  await tasks.run(options)
}
