const User = require("../models/User");
const userService = require('../service/user')
const error = require('../utils/error')
const authService = require('../service/auth')

const getUsers = async (req, res, next) => {
    /**
     * TODO: filter, sort, pagination, select
     */

    try{
        const users = await userService.findUsers()
        return res.status(200).json(users)
    } catch(e){
        next (e)
    }
};

const getUserById = async (req, res, next) => {
    const {userId} = req.params
    try{
        const user = await userService.findUserByProperty('_id',userId)

        if(!user){
            throw error('user not found',404)
        }

        return res.status(200).json(user)

    } catch(e){
        next(e)
    }
};

const postUser = async (req, res, next) => {
    const { name, email, password, roles, accountStatus, } = req.body
    try {
       const user =  await authService.registerService({ name, email, password, roles, accountStatus })
       return res.status(201).json(user)
    } catch (e) {
        next(e)
    }

};

const putUserById = (req, res, next) => {};

const patchUserById = async (req, res, next) => {
    const {userId} = req.params
    const{name,roles,accountStatus} = req.body
    

    try {
        
        const user = await userService.findUserByProperty('_id', userId)
        if(!user){
            throw error('User Not Found',404)
        }

        user.name = name ?? user.name
        user.roles = roles ?? user.roles
        user.accountStatus = accountStatus ?? user.accountStatus

        await user.save()
        return res.status(200).json(user)
    } catch (e) {
        next(e)
    }
};


const deleteUserById = async (req, res, next) => {
    const {userId} = req.params
    try {
        const user = await userService.findUserByProperty('_id', userId)
        if(!user){
            throw error ('User Not Found', 404)
        }

        await user.deleteOne()
        return res.status(203).send()
    } catch (e) {
        next(e)
    }
};



module.exports ={
    getUsers,
    getUserById,
    postUser,
    putUserById,
    patchUserById,
    deleteUserById,
}