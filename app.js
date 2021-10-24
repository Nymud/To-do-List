//jshint esversion:6

const express = require ("express");
const bodyParser = require ("body-parser");
const date = require (__dirname + "/date.js")

const app = express();

const items = ["Execrise","Eat breakfast","Take a shower"];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

app.get("/",function(req, res){
    const day = date.getDay();

    res.render("list", {listTitle: day, newListItems:items});
    
});

app.post("/", function(req, res){
    const item = req.body.newItem;

    if (req.body.list === "Work List") {
        workItems.push(item); 
        res.redirect("/work");
    }else {
        items.push(item);
        res.redirect("/");
    }

    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// app.post("/work", function(req, res){
//     const item = req.body.newItem;
//     console.log(item);
    
//     res.render("/work")
// });

app.get ("/about", function(req, res){
   res.render("about");

})


app.post("/deconste", function(req, res){
    const item = req.body.deconsteItem;
    console.log(item);
    items.splice(parseInt(item), 1);

    res.redirect("/");
});


app.listen(3000, function(req, res){
    console.log("Server running at port 3000");
});






























































































