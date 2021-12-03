const mongooose = require("mongoose");

const productSchema = mongooose.Schema({
    product_id : String,
    title : String,
    price : String,
    category : String,
    company_id : String,
    seller_id : String
});

const productModel = mongooose.model("product",productSchema,"product");
module.exports = productModel;