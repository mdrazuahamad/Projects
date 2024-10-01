const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    }
})


const Profile = model('Profile', userSchema)
model.export = User;

const { model, Schema } = require('mongoose')

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    avatar: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',

    }
})
const Profile = model('Profile', userSchema)
model.export = User