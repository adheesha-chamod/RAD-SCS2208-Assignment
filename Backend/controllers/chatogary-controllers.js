const Chatogary=require("../model/Chatogary");

const getAllChatogary=async(req,res,next)=>{
    let chatogaries;
    try{
        chatogaries=await Chatogary.find();
    }catch(err){
        console.log(err);
    }
    if(!chatogaries){
        return res.status(404).json({message:"No chatogary found!!"})
    }
    return res.status(200).json({chatogaries});
};

const addChatogary =async(req,res,next)=>{
    const {name}=req.body;
    let chatogary;
    try{
        chatogary =new Chatogary({
            name
        });
        await chatogary.save();
    }catch(err){
        console.log(err);
    }
    if(!chatogary){
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).json({chatogary});
};

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let chatogary;
    try{
        chatogary=await Chatogary.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!chatogary){
        return res.status(404).json({message:"No chatogary found!!"})
    }
    return res.status(200).json({chatogary});
};

const updateChatogary=async(req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    const {name}=req.body;
    let chatogary;
    try{
        chatogary=await Chatogary.findByIdAndUpdate(id,{
            name
        });
        chatogary=await chatogary.save();
    }catch(err){
        console.log(err);
    }
    if(!chatogary){
        return res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({chatogary});
}

const deleteChatogary=async(req,res,next)=>{
    const id=req.params.id;
    let chatogary;
    try{
        chatogary = await Chatogary.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!chatogary){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({message:"Product successfully deleted"});
}

exports.getAllChatogary=getAllChatogary;
exports.addChatogary=addChatogary;
exports.getById=getById;
exports.updateChatogary=updateChatogary;
exports.deleteChatogary=deleteChatogary;