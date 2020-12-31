# photo-grabber

A utility for grabbing images from a gallery

## Installation

```bash
npm install -g photo-grabber
```

## Options

To see these from the command line: `photo-grabber --help`

- `--url`, `-u` page to scrape
  - required
- `--regex`, `-r` regex for finding images in the html. The first capture group will be used.
  - required
- `--suffix`, `-s` suffix to append to image urls
  - optional
  - default: blank
- `--prefix`, `-p` prefix to prepend to image urls
  - optional
  - default: blank
- `--saveDir`, `-d` where to save the images
  - optional
  - default: the current dir

## Example

```bash
photo-grabber -u http://google.com -r 'src="(/logos/doodles.*?)"' -p http://google.com
options {
  url: 'http://google.com',
  regex: 'src="(/logos/doodles.*?)"',
  prefix: 'http://google.com',
  suffix: '',
  saveDir: '.'
}
[18:48:25] fetching http://google.com [started]
[18:48:26] → status: 200
[18:48:26] fetching http://google.com [completed]
[18:48:26] downloading page body [started]
[18:48:26] → size: 14805 chars
[18:48:26] downloading page body [completed]
[18:48:26] finding images [started]
[18:48:26] → image count: 1
[18:48:26] finding images [completed]
[18:48:26] formatting image urls [started]
[18:48:26] formatting image urls [completed]
[18:48:26] Downloading images [started]
[18:48:26] http://google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif [started]
[18:48:26] fetching [started]
[18:48:26] → status: 200
[18:48:26] fetching [completed]
[18:48:26] saving [started]
[18:48:26] → saving to december-holidays-days-2-30-6753651837108830.3-law.gif
[18:48:26] → saved 129754 bytes
[18:48:26] saving [completed]
[18:48:26] http://google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif [completed]
[18:48:26] Downloading images [completed]

```
