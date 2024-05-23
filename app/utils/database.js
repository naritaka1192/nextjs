import mongoose from "mongoose"
const connectDB =async()=>{
  try{
    await mongoose.connect("mongodb+srv://xlufh06014:1192296kamakura@cluster0.ofpxhgl.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Success:Connected to MongoDB")
  }catch(err){
    console.log("Failure:Unconnected to MongoDB")
    throw new Error()

  }
  }

export default connectDB
