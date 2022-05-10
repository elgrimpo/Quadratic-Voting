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
    },
    subscriptions: {
        type: Array,
        default: [{
            communityId: "622058d622194df2d949a38c"
        }
        ]
    }
})


const UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema