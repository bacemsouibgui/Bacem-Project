const mongoose =require('mongoose');

const UserSchema= new mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },

    email:{
        type:String,
        required: true,
        unique:true
    },

    password:{
        type:String,
        required: true
    },
    
     imgUser:String,
    
    role:{
        type:String,
        enum : ["user" , "admin"],
        default:"user" ,
    },
    orders:[]

});

module.exports = User = mongoose.model('user',UserSchema)