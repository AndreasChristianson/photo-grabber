# photo-grabber

A utility for grabbing images from a gallery.

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
photo-grabber -u http://google.com/doodles -r 'src="(//www.google.com/logos/doodles.*?)"' -p http:
options {
  url: 'http://google.com/doodles',
  regex: 'src="(//www.google.com/logos/doodles.*?)"',
  prefix: 'http:',
  suffix: '',
  saveDir: '.'
}
[09:54:51] fetching http://google.com/doodles [started]
[09:54:52] → status: 200
[09:54:52] fetching http://google.com/doodles [completed]
[09:54:52] downloading page body [started]
[09:54:52] → size: 309392 chars
[09:54:52] downloading page body [completed]
[09:54:52] finding images [started]
[09:54:52] → image count: 8
[09:54:52] finding images [completed]
[09:54:52] formatting image urls [started]
[09:54:52] formatting image urls [completed]
[09:54:52] Downloading images [started]
[09:54:52] http://www.google.com/logos/doodles/2021/uganda-independence-day-2021-6753651837109105-2xa.gif [started]
[09:54:52] fetching [started]
[09:54:52] → status: 200
[09:54:52] fetching [completed]
[09:54:52] saving [started]
[09:54:52] → saving to uganda-independence-day-2021-6753651837109105-2xa.gif
[09:54:53] → saved 169294 bytes
[09:54:53] saving [completed]
[09:54:53] http://www.google.com/logos/doodles/2021/uganda-independence-day-2021-6753651837109105-2xa.gif [completed]
[09:54:53] http://www.google.com/logos/doodles/2021/hangul-day-2021-6753651837109104-2x.png [started]
[09:54:53] fetching [started]
[09:54:53] → status: 200
[09:54:53] fetching [completed]
[09:54:53] saving [started]
[09:54:53] → saving to hangul-day-2021-6753651837109104-2x.png
[09:54:53] → saved 215630 bytes
[09:54:53] saving [completed]
[09:54:53] http://www.google.com/logos/doodles/2021/hangul-day-2021-6753651837109104-2x.png [completed]
[09:54:53] http://www.google.com/logos/doodles/2021/czech-republic-elections-2021-6753651837109070-2x.png [started]
[09:54:53] fetching [started]
[09:54:54] → status: 200
[09:54:54] fetching [completed]
[09:54:54] saving [started]
[09:54:54] → saving to czech-republic-elections-2021-6753651837109070-2x.png
[09:54:54] → saved 10384 bytes
[09:54:54] saving [completed]
[09:54:54] http://www.google.com/logos/doodles/2021/czech-republic-elections-2021-6753651837109070-2x.png [completed]
[09:54:54] http://www.google.com/logos/doodles/2021/ivan-piddubnys-150th-birthday-6753651837109102.2-2xa.gif [started]
[09:54:54] fetching [started]
[09:54:54] → status: 200
[09:54:54] fetching [completed]
[09:54:54] saving [started]
[09:54:54] → saving to ivan-piddubnys-150th-birthday-6753651837109102.2-2xa.gif
[09:54:55] → saved 468201 bytes
[09:54:55] saving [completed]
[09:54:55] http://www.google.com/logos/doodles/2021/ivan-piddubnys-150th-birthday-6753651837109102.2-2xa.gif [completed]
[09:54:55] http://www.google.com/logos/doodles/2021/margaret-fultons-97th-birthday-6753651837109221-2xa.gif [started]
[09:54:55] fetching [started]
[09:54:55] → status: 200
[09:54:55] fetching [completed]
[09:54:55] saving [started]
[09:54:55] → saving to margaret-fultons-97th-birthday-6753651837109221-2xa.gif
[09:54:56] → saved 926135 bytes
[09:54:56] saving [completed]
[09:54:56] http://www.google.com/logos/doodles/2021/margaret-fultons-97th-birthday-6753651837109221-2xa.gif [completed]
[09:54:56] http://www.google.com/logos/doodles/2021/teachers-day-2021-october-05-6753651837109099-2x.png [started]
[09:54:56] fetching [started]
[09:54:57] → status: 200
[09:54:57] fetching [completed]
[09:54:57] saving [started]
[09:54:57] → saving to teachers-day-2021-october-05-6753651837109099-2x.png
[09:54:57] → saved 78427 bytes
[09:54:57] saving [completed]
[09:54:57] http://www.google.com/logos/doodles/2021/teachers-day-2021-october-05-6753651837109099-2x.png [completed]
[09:54:57] http://www.google.com/logos/doodles/2013/doctor-whos-50th-anniversary-6317003539218432-hp.gif [started]
[09:54:57] fetching [started]
[09:54:57] → status: 200
[09:54:57] fetching [completed]
[09:54:57] saving [started]
[09:54:57] → saving to doctor-whos-50th-anniversary-6317003539218432-hp.gif
[09:54:57] → saved 33541 bytes
[09:54:57] saving [completed]
[09:54:57] http://www.google.com/logos/doodles/2013/doctor-whos-50th-anniversary-6317003539218432-hp.gif [completed]
[09:54:57] http://www.google.com/logos/doodles/2015/605th-anniversary-of-prague-astronomical-clock-4922756059627520-hp.jpg [started]
[09:54:57] fetching [started]
[09:54:58] → status: 200
[09:54:58] fetching [completed]
[09:54:58] saving [started]
[09:54:58] → saving to 605th-anniversary-of-prague-astronomical-clock-4922756059627520-hp.jpg
[09:54:58] → saved 46439 bytes
[09:54:58] saving [completed]
[09:54:58] http://www.google.com/logos/doodles/2015/605th-anniversary-of-prague-astronomical-clock-4922756059627520-hp.jpg [completed]
[09:54:58] Downloading images [completed]
```
