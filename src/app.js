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
