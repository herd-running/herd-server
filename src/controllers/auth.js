const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

const login = (req, res, next) => {
  if (!req.body.username || !req.body.password)
    return next({ status: 400, message: 'Bad Request' })

  authModel.login(req.body.username, req.body.password)
    .then(user => {
      const token = jwt.sign({ id: user.id }, process.env.SECRET)
      return res.status(200).send({ token })
    }).catch(next)
}

const authenticated = (req, res, next) => {
  if (!req.headers.authorization)
  return next({ status: 401, message: 'Authentication Failed' })
  
  const [bearer, token] = req.headers.authorization.split(' ')
  jwt.verify(token, process.env.SECRET, (err, payload) => {
    
    if (err) return next({ status: 401, message: 'Unauthorized' })
    req.claim = payload
    next()
  })
}

const status = (req, res, next) => {
  res.status(200).send({ id: req.claim.id })}

const isSelf = (req, res, next) => {
  if (parseInt(req.params.userId) !== req.claim.id)
    return next({ status: 401, message: 'Unauthorized is Self' })
  next()
}

module.exports = { login, status, authenticated, status, isSelf }