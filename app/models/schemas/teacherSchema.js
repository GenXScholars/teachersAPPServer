const mongoose = require('mongoose');
module.exports.schemas = {
    email: {
        type: String,
        unique:true,
        required: true,
    },
    username:{
        type:String,
        unique: true,
        required: true
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    password:{
        type:String,
        required: true,
    },
    merchantId:{
        type:Number
    },
    dateCreated:{
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        default:'TEACHER',
        enum: ['TEACHER', 'EMPLOYER', 'ADMIN']
    }
}