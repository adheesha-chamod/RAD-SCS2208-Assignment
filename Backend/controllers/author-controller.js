const Author=require("../model/Author");

const getAllAuthor=async(req,res,next)=>{
    let authors;
    try{
        authors=await Author.find();
    }catch(err){
        console.log(err);
    }
    if(!authors){
        return res.status(404).json({message:"No authors found!!"})
    }
    return res.status(200).json({authors});
};

const addAuthor =async(req,res,next)=>{
    const {name,language}=req.body;
    let author;
    try{
        author =new Author({
            name,
            language
        });
        await author.save();
    }catch(err){
        console.log(err);
    }
    if(!author){
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).json({author});
};

const getById=async(req,res,next)=>{
    const id=req.params.id;
    let author;
    try{
        author=await Author.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!author){
        return res.status(404).json({message:"No author found!!"})
    }
    return res.status(200).json({author});
};

const updateAuthor=async(req,res,next)=>{
    const id=req.params.id;
    console.log(id);
    const {name,language}=req.body;
    let author;
    try{
        author=await Author.findByIdAndUpdate(id,{
            name,
            language
        });
        author=await author.save();
    }catch(err){
        console.log(err);
    }
    if(!author){
        return res.status(404).json({message:"Unable to update"})
    }
    return res.status(200).json({author});
}

const deleteAuthor=async(req,res,next)=>{
    const id=req.params.id;
    let author;
    try{
        author = await Author.findByIdAndRemove(id);
    }catch(err){
        console.log(err);
    }
    if(!author){
        return res.status(404).json({message:"Unable to delete"})
    }
    return res.status(200).json({message:"Author successfully deleted"});
}

exports.getAllAuthor=getAllAuthor;
exports.addAuthor=addAuthor;
exports.getById=getById;
exports.updateAuthor=updateAuthor;
exports.deleteAuthor=deleteAuthor;