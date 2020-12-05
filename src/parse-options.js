import meow from 'meow'
import grabber from './photo-grabber.js'

const cli = meow(
  `
    Usage
      $ foo <input>
 
    Options
    --url, -u page to scrape
      required
    --regex, -r regex for finding images in the html
      required
    --suffix, -s suffix to append to image urls
      optional
    --saveDir, -d where to save the images 
      default: \`.\`
 
    Examples
      $ photo-grabber
`,
  {
    flags: {
      url: {
        type: 'string',
        alias: 'u',
        isRequired: true,
      },
      regex: {
        type: 'string',
        alias: 'r',
        isRequired: true,
      },
      suffix: {
        type: 'string',
        alias: 's',
      },
      saveDir: {
        type: 'string',
        alias: 'd',
        isRequired: true,
        default: '.',
      },
    },
  }
)
console.debug('options', cli.flags)
grabber(cli.flags)
