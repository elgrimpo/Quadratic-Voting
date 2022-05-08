import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    image_url: String,
    userName: String,
    googleId: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema