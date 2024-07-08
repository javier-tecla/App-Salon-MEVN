import mongoose from 'mongoose'
import { uniqueId } from '../utils/index.js'
import CryptoJS from 'crypto-js'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },  
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    token: {
        type: String,
        default: () => uniqueId()
    },
    verified: {
        type: Boolean,
        default: false
    },
    admin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }
    const salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
    this.salt = salt;

    this.password = CryptoJS.SHA256(this.password + salt).toString();

    next();
    
})

const User = mongoose.model('User', userSchema)

export default User