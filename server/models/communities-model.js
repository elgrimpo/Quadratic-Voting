import mongoose from 'mongoose'


const communitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image_url: String,
    banner_url: {
        type: String,
        default: "https://images.unsplash.com/photo-1624359136353-f60129a367b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    },
    headline: String,
    description: String,
    permissions: [{
        userId: String,
        role: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    } 

})

const CommunitySchema = mongoose.model('CommunitySchema', communitySchema);

export default CommunitySchema