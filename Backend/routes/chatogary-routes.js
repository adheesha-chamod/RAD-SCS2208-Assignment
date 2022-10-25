const express=require('express');
const router=express.Router();
const Chatogary=require("../model/Chatogary");
const chatogariesController=require("../controllers/chatogary-controllers");

router.get("/",chatogariesController.getAllChatogary);
router.post("/",chatogariesController.addChatogary);
router.get("/:id",chatogariesController.getById);
router.put("/:id",chatogariesController.updateChatogary);
router.delete("/:id",chatogariesController.deleteChatogary);


module.exports=router;