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


app.get('/osszeshos', (req, res) => {

  var mysql = require('mysql')
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mlbb'
  })
  
  connection.connect()
  
  connection.query('SELECT `hos_nev`,`kep`,laning.role FROM `heros` INNER JOIN laning ON laning.id=heros.role_id ', function (err, rows, fields) {
    if (err) throw err
  
    console.log(rows)
    res.send(rows)
  })
  
  connection.end()



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
    
    connection.query('SELECT `hos_nev`,`kep`,laning.role FROM `heros` INNER JOIN laning ON laning.id=heros.role_id WHERE laning.role LIKE "Tank" ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })

  app.get('/harcosok', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mlbb'
    })
    
    connection.connect()
    
    connection.query('SELECT `hos_nev`,`kep`,laning.role FROM `heros` INNER JOIN laning ON laning.id=heros.role_id WHERE laning.role LIKE "Fighter"', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()


  
  })

  app.get('/osszestargy', (req, res) => {

    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mlbb'
    })
    
    connection.connect()
    
    connection.query('SELECT `item_nev`,`ar`,items.leiras,items.kep,items_type.item_fajta FROM `items` INNER JOIN items_type ON items_type.id=items.tipus_id ', function (err, rows, fields) {
      if (err) throw err
    
      console.log(rows)
      res.send(rows)
    })
    
    connection.end()
  
  
  
  })


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })