const cvServices = require("../services/cvServices");


 function create(req, res, next) {
    cvServices.createNewCv(req.body)
    .then((cv) => {
        res.json({
            message : `Cv created successfully`,
            cv
        })
    }).catch(err => next(err))
}

 function getById(req, res, next){
     cvServices.getByCvId(req.params.id)
     .then((cv) => {
         res.json({
             message:`your cv was retrieved succesffully`,
             cv
         })
     }).catch(err => next(err))
 }

 function getAll(req, res, next){
     cvServices.getAllCvs()
     .then((cv)=> {
        res.json({
            message:`All cv's retrieved succesfully`,
            cv
        })
     }).catch(err => next(err))
 }

 function update(req, res, next){
    cvServices.updateCv(req.params.id, req.body)
    .then((cv)=> {
       res.json({
           message:`Cv updated succesfully`
       })
    }).catch(err => next(err))
}

function deleteCv(req, res, next){
    cvServices._delete(req.params.id)
    .then((card)=> {
       res.json({
           message:`Cv was deleted`,
           card
       })
    }).catch(err => next(err))
}

module.exports = {
    create,
    getById,
    getAll,
    update,
    deleteCv
}