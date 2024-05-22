const express = require('express')
const mongoose = require('mongoose');
// const mongoose = require('mongoose')  - will add later
const PORT = 8000;

//setting the ejs folder and public folder
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'));
app.set('views','pages')
app.use(express.json())




//routing

const adminRoute = require('./routes/admin')
const mainRoute = require('./routes/main');
const url = process.env.DB_URL

//connecting to db
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=>{app.listen(PORT) ; console.log('success', `http://localhost:${PORT}`);})
.catch((err)=>console.log(err))

//routes

app.use('/', mainRoute); 

app.use('/admin', adminRoute); 

