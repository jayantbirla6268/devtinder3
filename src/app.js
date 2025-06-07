 const express = require("express"); 
const connectDB = require("./config/database.js");
const User = require("./models/user.js");

const app = express();

app.use(express.json()); // middleware

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});
//get user by email
app.get("/user",async(req,res)=>{
  const userEmail = req.query.emailid;

  try{
   const users  = await user.find({emailid:userEmail});
    if(users.length===0){
      res.status(404).send("user not found");
    }else{
      res.send(users);
    }
  }

  catch(err){
    res.status(400).send("something went wrong ")
  }
})
//feed Api -get/feed -all the user from the database
app.get("/feed",async ( req,res)=>{
  try{
    const users=await User.find({});
    res.send(users)

  }catch(err){
   res.status(400).send("something went wrong ")
  }
   
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });


   