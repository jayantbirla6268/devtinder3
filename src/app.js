 const express=require("express");
 const app=express();


  

app.get("/user",(req,res)=>{
    res.send({first:"jayantbirla",last:"birla"})
});

app.post("/user",(req,res)=>{
    //saving data to db
    res.send("data sucessfully saved to the database");
});
//app.use("/test",(req,res)=>{
    //res.send("hello from the server");
//});

app.delete("/user",(req,res)=>{
    res.send("deleted sucessfully")
})

 
 app.listen(3000,()=>  {
    console.log("server is sucessfully listining on port 3000...");

 });
 