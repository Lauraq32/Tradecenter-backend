const { Schema, model } = require('mongoose');
const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    lastname: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true, 'email is required'],
    },
    password: {
        type: String,
        required: [true, 'the password is required'],
    },
    rol: {
        type: String,
        default: 'user',
        emun: ['user', 'admin']
    },
    invested: {
        type: Number,
    },
    percent: {
        type: Number,
    }
});

UserSchema.methods.toJSON = function() {
    const { __v, password, _id, ...user  } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema);