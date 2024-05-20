const express = require('express')
// const mongoose = require('mongoose')  - will add later
const PORT = 8000;

//setting the ejs folder and public folder
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'));
app.set('views','pages')

//routing

const adminRoute = require('./routes/admin')
const mainRoute = require('./routes/main')

app.listen(PORT)

//routes

app.use('/', mainRoute); 

app.use('/admin', adminRoute); 

