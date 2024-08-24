const { Schema, models, model } = require("mongoose");

const ModalSchema = new Schema({
    title:String,
    price:Number
})
const Product = models.product || model("product",ModalSchema)
export default Product