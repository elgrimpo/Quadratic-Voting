import mongoose from 'mongoose'

const communitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: String,
})

const CommunitySchema = mongoose.model('CommunitySchema', communitySchema);

export default CommunitySchema