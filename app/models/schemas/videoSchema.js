module.exports.schemas = {
    title:{
        type: String,
        unique: true,
        required: true,
    },
    video:{
        type: String,
        required: true
    },
    videoUploadDate:{
        type: String,
        required: true,
    },
    courseSummary:{
        type: String,
        required: true
    }
}