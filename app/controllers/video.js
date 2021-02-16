const videoServices = require("../services/videoServices");


 function upload(req, res, next) {
    videoServices.createNewVideo(req.body)
    .then((cv) => {
        res.json({
            message : `Video uploaded successfully`,
            cv
        })
    }).catch(err => next(err))
}

 function getById(req, res, next){
     videoServices.getVideoById(req.params.id)
     .then((video) => {
         res.json({
             message:`your video was retrieved succesffully`,
             video
         })
     }).catch(err => next(err))
 }

 function getAll(req, res, next){
     videoServices.getAllVideos()
     .then((cv)=> {
        res.json({
            message:`All videos retrieved succesfully`,
            cv
        })
     }).catch(err => next(err))
 }

 function update(req, res, next){
    videoServices.updateVideo(req.params.id, req.body)
    .then((video)=> {
       res.json({
           message:`video was updated succesfully`
       })
    }).catch(err => next(err))
}

function deleteVideo(req, res, next){
    videoServices._delete(req.params.id)
    .then((video)=> {
       res.json({
           message:`Video was deleted`,
           video
       })
    }).catch(err => next(err))
}

module.exports = {
    upload,
    getById,
    getAll,
    update,
    deleteVideo
}