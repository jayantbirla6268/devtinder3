 const mongoose =require('mongoose');


 const connectDB = async()=>{
 
 await mongoose.connect (
    
     "mongodb+srv://jayantbirla858:Jc2X2LEU4WY6Vgki@cluster0.bmfqiqg.mongodb.net/devtinder"

 
  )};
  
module.exports = connectDB;
//Jc2X2LEU4WY6Vgki
//mongodb+srv://jayantbirla858:Jc2X2LEU4WY6Vgki@cluster0.bmfqiqg.mongodb.net/

 