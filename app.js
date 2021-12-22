const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground')







app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));



app.get('/', (req, res) =>{
    res.render('home')
})
app.get('/makecampground', (req, res) =>{
    
})



app.listen(3000, () =>{
    console.log("Server on port 3000")
})