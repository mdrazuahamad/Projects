const router = require('express').Router()
const authRoutes = require('./auth') 
const usersRoutes = require('./users')
const authenticate = require('../middleware/authenticate')


router.use('/api/v1/auth', authRoutes)
router.use('/api/v1/users',authenticate, usersRoutes)



module.exports = router