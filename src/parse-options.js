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
    --saveDir, -d where to save the images 
      default: \`.\`
    
    Example
      $ photo-grabber -d ~/Desktop \\
        -r '""(http://image\d.photobiz.com/\d{4}/20_\d{14}_\d{7}_)""' \\
        -s xlarge.jpg \\
        --url 'http://www.mystudio.com/proofing/smith/gallery'
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
        default: ''
      },
      prefix: {
        type: 'string',
        alias: 'p',
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
