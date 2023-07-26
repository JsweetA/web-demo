import fs from 'fs';
import path from 'path';
import getApp from './common/index.js';

const app = getApp();
const PORT = 4000

import './mock/index.js';

const h = path.resolve(process.cwd(), './backend',)

app.get('/getDoc', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', '*')

  const docxUrl = `${h}/test.docx`

  res.writeHead(200, {
    'Content-Disposition': 'attachment; filename=' + encodeURI('test.docx'),
    'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  })

  const readStream = fs.createReadStream(docxUrl)

  readStream.pipe(res)

})


app.get('/getPdf', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Expose-Headers', '*')

  const pdfUrl = `${h}/test.pdf`

  res.writeHead(200, {
    'Content-Disposition': 'attachment; filename=' + encodeURI('test.pdf'),
    'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  })

  const readStream = fs.createReadStream(pdfUrl)

  readStream.pipe(res)

})

app.listen(PORT, () => {
  console.log('localhost: 4000');
});