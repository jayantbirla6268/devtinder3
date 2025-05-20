 const mongoose =require('mongoose');


 const connectDB = async()=>{
 
 await mongoose.connect (
   "mongodb+srv://jayantbirla858:fUCiV7SOvpHk9vpv@cluster0.vbhtx4j.mongodb.net/devtinder");
}; 
module.exports = connectDB;


 