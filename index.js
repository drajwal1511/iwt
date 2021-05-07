const express = require("express");
const app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.render("landing");
});
app.get("/blogs",(req,res)=>{
    res.render("blogs");
})
app.get("/blogs/virus",(req,res)=>{
    res.render("virus");
})
app.get("/blogs/malware",(req,res)=>{
    res.render("malware");
})
app.get("/blogs/antivirus",(req,res)=>{
    res.render("antivirus");
})
app.get("/blogs/cyber",(req,res)=>{
    res.render("cyber");
})
app.get("/blogs/worms",(req,res)=>{
    res.render("worms");
})
app.get("/blogs/security",(req,res)=>{
    res.render("security");
})
app.get("/static",(req,res)=>{
    res.render("static");
})
app.get("/plagiarism",(req,res)=>{
    res.render("plagiarism");
})
app.listen(4004,()=>{
    console.log("server up");
})