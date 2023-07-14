import mongoose from 'mongoose'
const Schema = mongoose.Schema
const groupSchema = new mongoose.Schema({
    communityId: {
        type: Schema.Types.ObjectId,
        required: true
    },
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
        userId: Schema.Types.ObjectId,
        votes: Number
    }],
    members: [{
        userId: Schema.Types.ObjectId,
        role: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    } 
})

const GroupSchema = mongoose.model('GroupSchema', groupSchema);

export default GroupSchema