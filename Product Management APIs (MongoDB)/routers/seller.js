const express = require("express");
const router = express.Router();
router.use(express.json());
const sellerModel = require("../modules/seller"); 
const productModel = require("../modules/company");

router.post("/addSeller",(req,res)=>{
    const { addSeller } = req.body;
    sellerModel.create(addSeller);
    return res.json({data:"Seller Added Successfully!!"});
});

router.get("/sellerOfProduct", async (req,res)=>{
    const name = req.body.name;
    const details = await sellerModel.findOne({name:name});
    if(details){
        const pDetail = await productModel.findOne({product_id:details["product_id"]});
        return res.json({data:pDetail});
    }
    return res.json({data:"No Data Found"});
})

router.put("/updateSellerName/:sid",async(req,res)=>{
    const sid = req.params.seller_id;
    const newSellername = await sellerModel.findOneAndUpdate(
        {seller_id:sid},
        {name:newSellername},
        {new:true}
    );
    return res.json({data:"Seller name Updated Successfully"});
});

router.delete("/deleteSeller/:sid",async(req,res)=>{
    const sid = req.params.seller_id;
    const delSeller = await sellerModel.findOneAndDelete({seller_id:sid})
    return res.json({data:"Seller Deleted Successfully"});
});

module.exports = router;