import mongoose from "mongoose";

const InterviewSchema = new mongoose.Schema({
    role:String,
    response:String,
},{timestamps:true})

export default mongoose.model("interview",InterviewSchema)