const express = require("express");
const app =express();
app.get("/",function(request,respone){
    respone.sendFile(__dirname+"/homepage.html");
})
app.listen(3000,function(){
    console.log("server started at 3000");
});