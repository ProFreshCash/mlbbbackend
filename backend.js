const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())
app.use(express.static('kepek'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/tankok', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mlbb'
    })
    
    connection.connect()
    
    connection.query('SELECT tank.hos_nev, tank.leiras, `kep` FROM `heros` INNER JOIN tank ON tank.hos_id = heros.hos_id ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })