const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 30,
        required: true,

    },
    email: {
        type: String,
        required: true,
        validate:{
            validator: function(v){
             return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)

            },
            message: (prop)=> `Invalid email:${prop.value}`,
        }
    },
    password:{
        type: String,
        minlength:[6,'password is   too short'],
        required: true,
    },
    roles:{
        type:[String],
        required: true,
        default: ['STUDENT']
    },
    accountStatus: {
        type: String,
        enum:['PENDING','ACTIVE','REJECT'],
        default:'PENDING',
        required: true,
    },
})


const User = model('User', userSchema)
module.exports = User;