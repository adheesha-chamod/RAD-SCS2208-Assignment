const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const chatogarySchema=new Schema({
    name:{
        type:String,
        required: true
    }
});
module.exports=mongoose.model("Chatogary",chatogarySchema);