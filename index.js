const express = require('express')
// const mongoose = require('mongoose')  - will add later
const PORT = 8000;

//setting the ejs folder and public folder
const app = express()
app.set('view engine','ejs')
app.use(express.static('public'));
app.set('views','pages')
app.listen(PORT)



//home section - will make a seperate routing file for it later

app.get('/',(req,res)=>{
res.render('./main/index')
})
app.get('/register',(req,res)=>{
    res.render('./main/register')
})
    
app.get('/signup',(req,res)=>{
res.render('./main/signup')
})
        




//admin section  - will make a seperate routing file for it later
app.get('/admin',(req,res)=>{
    res.render('./adminstuff/1admin')
    
    
    })
app.get('/admin/editPackage',(req,res)=>{
    res.render('./adminstuff/editpackage')
    
    
    })
    
app.get('/admin/addPKG',(req,res)=>{
    res.render('./adminstuff/partials/addPKG')
    
    
    })
app.get('/admin/editPKG',(req,res)=>{
    res.render('./adminstuff/partials/editPKG')
    
    
    })
app.get('/admin/removePKG',(req,res)=>{
    res.render('./adminstuff/partials/removePKG')
    
    
    })
