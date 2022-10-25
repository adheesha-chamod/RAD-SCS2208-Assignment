const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const bookSchema=new Schema({
    name:{
        type:String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    chatogary:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Book",bookSchema);