const { Schema, models, model } = require("mongoose");

const ModelSchema =  new Schema({
    name:String,
    items:Array,
    price:String

})

const Order = models.order || model("order",ModelSchema);
export default Order;