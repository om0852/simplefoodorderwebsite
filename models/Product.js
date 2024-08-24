const { Schema, models, model } = require("mongoose");

const ModalSchema = new Schema({
    name:String,
    price:Number
})
const Product = models.product || model("product",ModalSchema)
export default Product