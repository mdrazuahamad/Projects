const router = require('express').Router()
const userController = require('../controller/users')

router.get('/:userId', userController.getUserById)


router.put('/:userId', ()=>{})

router.patch('/:userId', ()=>{})

router.delete('/:userId', ()=>{})

router.get('/', userController.getUsers)

router.post('/', ()=>{})







module.exports = router;