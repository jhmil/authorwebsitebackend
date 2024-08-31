const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




app.get("/", function(req, res){


  

    res.render("home")
    
  
  })

app.get("/index.html", function(req, res){
    res.render("home")
})    

app.get("/books.html", function(req, res){
    res.render("books")
})  


app.get("/characterspotlight.html", function(req, res){
    res.render("characterspotlight")
})  

app.get("/merchandise.html", function(req, res){
    res.render("merchandise")
})  

app.get("/authorbio.html", function(req, res){
    res.render("authorbio")
})  





app.listen(3000, function() {
    console.log("Server started on port 3000");
  });