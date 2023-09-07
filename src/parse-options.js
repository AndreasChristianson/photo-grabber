import meow from 'meow'
import grabber from './photo-grabber.js'

const cli = meow(
  `
    Usage
      $ photo-grabber <options>
 
    Options
    --url, -u page to scrape
      required
    --regex, -r regex for finding images in the html
      required
    --suffix, -s suffix to append to image urls
      optional
    --prefix, -p prefix to prepend to image urls
      optional
    --saveDir, -d where to save the images 
      default: \`.\`
    
    Example
      $ photo-grabber \\
        -u http://google.com \\
        -r 'src="(/logos/doodles.*?)"' \\
        -p http://google.com
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
      cookie: {
        type: 'string',
        alias: 'c',
        default: ''
      },
      suffix: {
        type: 'string',
        alias: 's',
        default: ''
      },
      prefix: {
        type: 'string',
        alias: 'p',
        default: ''
      },
      fileSuffix: {
        type: 'string',
        default: ''
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
