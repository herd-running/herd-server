const groupModel = require('../models/groups')

function getAll(req, res, next) {
  groupModel.getAll()
  .then( data => {
    res.send(data)
  })
  .catch(next)
}

function getOne(req, res, next){
  groupModel.getOne(req.params.groupId)
  .then( ([data]) => {
    res.send(data)
  })
  .catch(next)
}

// function create(req, res, next){
//   if(!req.body.first_name || !req.body.last_name || !req.body.grade_level || !req.body.email || !req.body.password) {
//     return next({ status: 400, message: 'Could not create account'})
//   }
//   teacherModel.create(req.body.first_name, req.body.last_name, req.body.grade_level, req.body.email, req.body.password,  )
//   .then(function(data){
//     return res.status(201).send(data)
//   })
//   .catch(next)
// }


module.exports = {
  getAll, 
  getOne,
  // create,
  // remove,
  // edit
}