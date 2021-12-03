const express = require("express");
const router = express.Router();
router.use(express.json());
const companyModel = require("../modules/company");
const productModel = require("../modules/product");

router.get("/compnayOfProduct", async (req,res)=>{
    const name = req.body.name;
    const details = await companyModel.findOne({name:name});
    if(details){
        const productDetail = await productModel.findOne({product_id:details["product_id"]});
        return res.json({data:productDetail});
    }
    return res.json({data:"No Data Found"});
});

router.post("/addCompany",(req,res)=>{
    const { addCompany } = req.body;
    companyModel.create(addCompany);
    return res.json({data:"Company added Successfully!!"});
});

router.put("/updateProductID/:cid",async(req,res)=>{
    const cid = req.params.cid;
    const pid = req.body.product_id;
    const newpid = await companyModel.findOneAndUpdate(
        {company_id:cid},
        {product_id:pid},
        {new:true}
    );
    return res.json({data:"Product id updated Successfully"});
});

router.delete("/deleteCompany/:cid",async(req,res)=>{
    const cid = req.params.cid;
    const delcompany = await companyModel.findOneAndDelete({company_id:cid})
    return res.json({data:"Company Deleted Successfully"});
});


module.exports = router;