const express = require('express');
const app = express();
const porta = 443;


app.get('/', (req, res) =>{
  res.sendFile(__dirname + '/home.html');
})

app.get('/produto1', (req, res) =>{
  res.sendFile(__dirname + '/p1.html');
})
app.get('/produto2', (req, res) =>{
  res.sendFile(__dirname + '/p2.html');
})
app.get('/produto3', (req, res) =>{
  res.sendFile(__dirname + '/p3.html');
})

app.use(express.static(__dirname));



app.listen(porta, () =>{
  console.log('Servidor rodando');
})