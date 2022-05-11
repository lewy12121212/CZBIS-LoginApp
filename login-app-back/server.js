const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')

//server settings
var server = {
  port: 4000
}

//database settings
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_LoginApp'
})

const generateToken = () => {
  let token = ''
  for(let i = 0; i < 80; i++){
    token += String.fromCharCode(0 + parseInt(Math.floor(Math.random() * (127 - 33 + 1) + 33)))
  }
  return token
}

app.use(cors())
app.use(bodyParser.json());

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`))

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js');
});

app.get('/dbTest', (req, res) => { 
  const sqlQuery = "SHOW TABLES"
  db.query(sqlQuery, (err, result) => {
      console.log(result)
      res.send(result)
  })
});

app.get('/usersList', (req, res) => { 
  const sqlQuery = "Select * from Users";
  db.query(sqlQuery, (err, result) => {
      console.log(result)
      res.send(result)
  })
});

app.post('/login', (req, res) => { 
  const login = req.body.login
  const pwd = req.body.pwd

  const sqlQuery = "Select * from Users where Login like (?) and Password like (?)";

  db.query(sqlQuery, [login, pwd], (err, result) => {
    console.log(result)
    if(err) res.send(err)
    else if(result.length === 0) res.json({
      auth: false,
      token: null})
    else res.json({
      auth: true,
      token: generateToken()})
  })
});

