const mongooose = require("mongoose");

const sellerSchema = mongooose.Schema({
    seller_id : String,
    name : String,
    product_id : String
});

const sellerModel = mongooose.model("seller",sellerSchema,"seller");
module.exports = sellerModel;