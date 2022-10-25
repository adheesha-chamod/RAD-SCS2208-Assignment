const express=require('express');
const router=express.Router();
const Book=require("../model/Complain");
const complainsController=require("../controllers/complains-controller");

router.get("/",complainsController.getAllComplains);
router.post("/",complainsController.addComplain);
router.get("/:id",complainsController.getById);
router.put("/:id",complainsController.updateComplain);
router.delete("/:id",complainsController.deleteComplain);


module.exports=router;