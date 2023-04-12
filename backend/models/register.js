const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Register = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }

})

Register.pre("save",async function(next){
    if(this.isModified("password")){
        this.password =await  bcrypt.hash(this.password,10)
        this.cpassword = undefined
    }
    next();
})

const Registration = mongoose.model('Registration',Register)
module.exports = Registration