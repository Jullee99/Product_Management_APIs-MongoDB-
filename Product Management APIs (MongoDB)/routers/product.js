const express = require("express");
const router = express.Router();
router.use(express.json());
const productModel = require("../modules/product"); 
const sellerModel = require("../modules/seller");
const companyModel = require("../modules/company");

router.post("/addProduct",(req,res)=>{
    const { addProduct } = req.body;
    productModel.create(addProduct);
    return res.json({data:"Product Added Successfully!!"});
});

router.put("/updateTitle/:pid",async(req,res)=>{
    const pid = req.params.product_id;
    const title = req.body.title;
    const newtitle = await productModel.findOneAndUpdate(
        {product_id:pid},
        {title:title},
        {new:true}
    );
    return res.json({data:"Product name Updated Successfully"});
});

router.delete("/deleteProduct/:pid",async(req,res)=>{
    const pid = req.params.product_id;
    const delProduct = await productModel.findOneAndDelete({product_id:pid})
    return res.json({data:"Product Deleted Successfully"});
});

router.get("/productOfCompnay", async (req,res)=>{
    const t = req.body.title;
    if(t){
        const details = await productModel.findOne({title:t});
        const cDetail = await companyModel.find({},{company_id:details["company_id"]});
        return res.json({data:cDetail});
    }
    return res.json({data:"No Data Found"});
});

router.get("/productOfSeller", async (req,res)=>{
    const t = req.body.title;
    if(t){
        const details = await productModel.findOne({title:t});
        const sDetail = await companyModel.find({},{seller_id:details["seller_id"]});
        return res.json({data:sDetail});
    }
    return res.json({data:"No Data Found"});
})

module.exports =router;