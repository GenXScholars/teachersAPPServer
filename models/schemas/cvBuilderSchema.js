const mongoose = require('mongoose');
module.exports.schemas = {
    firstName:{
        type: String
    },
    lastName:{
        type: String,
        required: true
    },
    image:{
        type:String,
        required:true
    },
    email: {
        type: String,
        unique:true,
        required: true,
    },
    schoolsAttended:{
         highSchool:{
             type: String,
         },
         polytechnic:{
             type: String
         },
         university:{
             type: String
         }
    },
    startDateOfHighSchool:{
        type: String
    },
    startDateOfPolytechnic:{
        type: String
    },
    startDateOfUniversity:{
        type: String
    },
    endDateOfHighSchool:{
        type: String
    },
    endDateOfPolytechnic:{
        type: String
    },
    endDateOfUniversity:{
        type: String
    },
    employmentHistory: {
        fisrtEmployment : {
             type: String
            },
        secondEmployment: {
             type: String
            },
        thirdEmployment: { 
            type: String
        }
    },
    YearsOfExp:{
        type:String,
        unique: true,
        required: true
    },
    hobbies:{
        type: String,
        required: true
    },
    referees:{
       one:{
        type: String
       },
       two:{
         type: String
       },
       three: {
         type: String
       }
    },
    dateCreated:{
        type: Date,
        default: Date.now
    }
}