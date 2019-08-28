const originalGlob = require('glob')
const { promisify } = require('util')
const fs = require('fs')

const glob = promisify(originalGlob)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const LOCAL_SCRIPT_RE = /<script[^>]*?src="http:\/\/localhost:8000\/[^>]*?><\/script>/gi

console.log('Cleaning up prerendered HTML files of localhost references...')

glob('dist/**/*.html')
  .then((files) => Promise.all(
    files.map((filename) =>
      readFile(filename, 'utf8')
        .then((data) =>
          data.replace(LOCAL_SCRIPT_RE, '')
        )
        .then((data) => writeFile(filename, data))
        .then(() => console.log(`Cleaned up ${filename}`))
        .catch((err) => {
          console.log(`Error cleaning up ${filename}`)
          console.error(err)
          throw err
        })
    )
  ))
  .then(() => console.log('Cleaning up done'))
