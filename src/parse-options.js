import meow from 'meow';
import grabber from './photo-grabber.js';

const cli = meow(`
    Usage
      $ foo <input>
 
    Options
    --url, -u page to scrape
    --regex, -r regex for finding images
    --suffix, -s suffix to append to image urls
 
    Examples
      $ photo-grabber
`, {
  flags: {
    url: {
      type: 'string',
      alias: 'u',
      isRequired: true,
      default:'http://www.mlinnstudios.com/proofing/adams/gallery'
    },
    regex: {
      type: 'string',
      alias: 'r',
      isRequired: true,
      default:'"(http:\\/\\/image\\d.photobiz.com\\/\\d{4}\\/20_20201204\\d{6}_\\d{7}_)"'
    },
    suffix: {
      type: 'string',
      alias: 's',
      isRequired: true,
      default:'xlarge.jpg'
    },
    saveDir: {
      type: 'string',
      alias: 'd',
      isRequired: true,
      default:'.'
    }
  }
});
console.debug('options', cli.flags);
grabber(cli.flags);
