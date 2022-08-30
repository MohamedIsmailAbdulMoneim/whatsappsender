const express = require('express')
const app = express()
const port = 5000
const path = require('path')
const cors = require('cors')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const downloadFile = (req, res) => {
  const fileLocation = path.join(__dirname, 'templatefiles', 'phoneNums.xlsx')
  res.download(fileLocation, 'phoneNums.xlsx', (err) => {
    if (err) console.log(err);
  });
}

const upload = multer({ storage: storage })

app.use(cors())

app.post('/file', upload.single('file'), function (req, res) {
  res.json({})
})

app.get('/file', downloadFile)

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

