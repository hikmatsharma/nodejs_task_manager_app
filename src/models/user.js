const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required:true,
            trim: true
    
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error('Email is not valid!!')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minLength: 7,
            trim: true,
            validate(value){
                if(value.toLowerCase().includes('password')){
                    throw new Error('password can not contain password')
                }
            }
        },
        age: {
            type: Number,
            validate(value){
                if(value<0){
                    throw new Error('Ag must be valid')
                }
            }
    
        },
        tokens: [{
            token:{
                type: String,
                required: true
            }

        }]
    
    })

    userSchema.methods.generateAuthToken = async function(){
        const user = this
        const token = jwt.sign({_id: user._id.toString() },"thisisnewcourse")
        user.tokens = user.tokens.concat({token})
        await user.save()
        return token
    }

    userSchema.statics.findByCredentials = async (email, password) =>{
        const user = await User.findOne({email})
        if(!user){
            throw new Error('unable to login')
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            throw new Error('unable to login')
        }
        return user
    }

    // hash password before saving 
    userSchema.pre('save', async function (next) {
        const user = this
        if(user.isModified('password')){
            user.password = await bcrypt.hash(user.password, 8)
        }
        next()
    })
const User = mongoose.model('User',userSchema)
module.exports = User