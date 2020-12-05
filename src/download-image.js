import fs from 'fs'

export default (res, savePath) =>
  new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(savePath)
    res.body.pipe(fileStream)
    res.body.on('error', (err) => {
      reject(err)
    })
    fileStream.on('finish', () => {
      const stats = fs.statSync(savePath)
      resolve(stats.size)
    })
  })
