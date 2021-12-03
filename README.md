# Product_Management_APIs-MongoDB-
## SCHEMA:
## PRODUCT
* product id : String
* title : String
* price : String
* category : Array of String
* company id : String
* seller id : Array of String

## COMPANY
* company id : String
* name : String
* product ids : Array of String

## SELLER
* seller id : String
* name : String
* product ids : Array of String

## Modules List
* express
* nodemon
* router
* dotenv

## App Run
* npx nodemon app.js
