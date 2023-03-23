const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const md5 = require('md5')

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

const generateToken = (login, password) => {
  return md5(login + password);
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
    if(!err){
      console.log(result)
      res.status(200).send(result)
    } else {
      res.status(404).send(err)
    }
    
  })
});

app.get('/usersList', (req, res) => { 
  const sqlQuery = "Select * from Users";
  db.query(sqlQuery, (err, result) => {
    if(!err){
      console.log(result)
      res.status(200).send(result)
    } else {
      res.status(404).send(err)
    }

  })
});
   
app.post('/login', (req, res) => { 
  const login = req.body.login
  const pwd = req.body.pwd

  const sqlQuery = "Select * from Users where Login = (?) and Password = (?)";

  db.query(sqlQuery, [login, pwd], (err, result) => {
    if(err) res.status(404).send(err)
    else if(result.length === 0) res.status(401).json({
      auth: false,
      token: null})
    else if(login !== result[0].Login || pwd !== result[0].Password){
      res.status(401).json({
        auth: false,
        token: null
      })
    } 
    else res.status(200).json({
      auth: true,
      userData: JSON.stringify({
        "Name": result[0].Name, 
        "Surname": result[0].Surname,
        "Login": result[0].Login,
        "Password": result[0].Password,
      }),
      token: generateToken(result[0].Login, result[0].Password)})
  })
});


app.post('/registration', (req, res) => {
  const name = req.body.name
  const surname = req.body.surname
  const login = req.body.login
  const pwd = req.body.pwd

  const sqlQuery = "INSERT INTO users (Name, Surname, Login, Password) VALUES (?, ?, ?, ?)";

  db.query(sqlQuery, [name, surname, login, pwd], (err, result) => {
    if(err) res.status(404).send(err);
    else res.status(200).send('OK')
  })
});
