const express = require('express'),
  app = express(),
  cors = require('cors'),
  mysql = require('mysql'),
  bodyParser = require('body-parser');

// make server object that contain port property and the value for our server.
var server = {
  port: 4000
};
// use the modules
app.use(cors())
app.use(bodyParser.json());

// setup database
db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'DB_LoginApp'
})

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js');
});

app.get('/dbTest', (req, res) => { 
  const sqlShowTables = "SHOW TABLES"
  db.query(sqlShowTables, (err, result) => {
      console.log(result)
      res.send(result)
  })
});

app.get('/usersList', (req, res) => { 
  const sqlShowTables = "Select * from Users";
  db.query(sqlShowTables, (err, result) => {
      console.log(result)
      res.send(result)
  })
});

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));