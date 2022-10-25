const Complain=require("../model/Complain");

const getAllComplains=async(req,res,next)=>{
    let complains;
    try{
        complains=await Complain.find();
    }catch(err){
        console.log(err);
    }
    if(!complains){
        return res.status(404).json({message:"No complains found!!"})
    }
    return res.status(200).json({complains});
};

const addComplain =async(req,res,next)=>{
    const {name,complainss}=req.body;
    let complain;
    try{
        complain =new Complain({
            name,
            complainss
        });
        await complain.save();
    }catch(err){
        console.log(err);
    }
    if(!complain){
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).json({complain});
};

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let complain;
    try{
        complain=await Complain.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!complain){
        return res.status(404).json({message:"No complain found!!"})
    }
    return res.status(200).json({complain});
};

const updateComplain=async(req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    const {name,complainss}=req.body;
    let complain;
    try{
        complain=await Complain.findByIdAndUpdate(id,{
            name,
            complainss
        });
        complain=await complain.save();
    }catch(err){
        console.log(err);
    }
    if(!complain){
        return res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({complain});
}

const deleteComplain=async(req,res,next)=>{
    const id=req.params.id;
    let complain;
    try{
        complain = await Complain.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!complain){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({message:"Complain successfully deleted"});
}

exports.getAllComplains=getAllComplains;
exports.addComplain=addComplain;
exports.getById=getById;
exports.updateComplain=updateComplain;
exports.deleteComplain=deleteComplain;