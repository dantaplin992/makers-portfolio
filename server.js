const express = require('express')

const app = express()

const path = require('path')
const router = express.Router()

app.use('/static', express.static(path.join(__dirname, 'pages')))

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
})

app.use('/', router)

app.listen(3000, () => console.log('Example app is listening on port 3000.'))