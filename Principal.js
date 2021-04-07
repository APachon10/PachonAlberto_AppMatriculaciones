//Importes 
const express = require('express')
const ejs= require('ejs')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');

//Variables
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}))

//Metodo Get que carga la pagina de login
app.get('/', (req, res) => {
   res.render('PantallaLogin.ejs')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





