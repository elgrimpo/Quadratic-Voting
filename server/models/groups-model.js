import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
    communityId: String,
    title: { 
        type: String, 
        required: true 
    },
    image_url: {
        type: String,
        default: "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
     },
    description: String,
    totalVotes: {
        type: Number,
        default: 100},
    remainingVotes: [{
        userId: String,
        votes: Number
    }],
    members: [{
        user_id: String,
        role: String
    }],
})

const GroupSchema = mongoose.model('GroupSchema', groupSchema);

export default GroupSchema