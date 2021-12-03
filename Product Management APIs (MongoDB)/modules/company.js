const mongooose = require("mongoose");

const companySchema = mongooose.Schema({
    company_id : String,
    name : String,
    product_id :String
});

const companyModel = mongooose.model("company",companySchema,"company");
module.exports = companyModel;