 const express = require("express");
 const connectDB =require("./config/database.js");
 const app = express();

 const User=require("./\models/user.js");

 app.post("/signup", async (req,res)=>{
  
 ////creating new instance  of the user model  
  const user = new User({
      firstName:"jayant",
    lastName:"birla",
    emailId:"jayantbirla@.com",
    password:"Jay@123",
  
  });
  try{
 await user.save();
 res.send("user added sucessfully");
  }catch (err){
    res.status(400).send("error in adding user");
  }
});
 
 connectDB()
 .then(()=>{
  console.log("database connection established...");
 app.listen(3000,()=>{
    console.log("server is sucessfully on port 3000");

   });
})
.catch((err)=>{
  console.error("database cannot established")
});
 
  
   