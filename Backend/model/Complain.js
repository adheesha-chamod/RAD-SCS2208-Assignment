const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const complainSchema=new Schema({
    name:{
        type:String,
        required: true
    },
    complainss:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Complain",complainSchema);