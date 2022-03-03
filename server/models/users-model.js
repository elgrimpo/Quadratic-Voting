import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    image: String,
    userName: String,
})


const UserSchema = mongoose.model('UserSchema', userSchema);

export default UserSchema