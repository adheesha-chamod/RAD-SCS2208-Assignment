const express=require('express');
const router=express.Router();
const Author=require("../model/Author");
const authorsController=require("../controllers/author-controller");

router.get("/",authorsController.getAllAuthor);
router.post("/",authorsController.addAuthor);
router.get("/:id",authorsController.getById);
router.put("/:id",authorsController.updateAuthor);
router.delete("/:id",authorsController.deleteAuthor);


module.exports=router;