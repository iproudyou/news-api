const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum: ['user', 'admin'],
        default: 'user'
    },
    article: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Article'
    }],
    created: {
        type: Date, 
        default: Date.now
    }
})

UserSchema.pre('save', async function(next) {
    const user = this;
    const hash = await bcrypt.hash(user.password, 10);

    this.password = hash;
    next()
})

UserSchema.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

// allow search and save for users
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;