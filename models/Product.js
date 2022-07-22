const mongoose =require('mongoose');

const ProductSchema = new mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },

    name:{
        type:String,
        required: true
    },

    imgUrl:{
        type:String

    },
    
    price:{
        type:Number
    },
    countInStock:{
        type:Number
    }
});

module.exports = Product = mongoose.model('product',ProductSchema)