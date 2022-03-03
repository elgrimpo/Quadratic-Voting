import mongoose from 'mongoose'

const groupSchema = new mongoose.Schema({
    communityID: Number,
    title: { type: String, required: true },
    image: String,
    description: String,
    totalVotes: {
        type: Number,
        default: 100},
    remainingVotes: {
        type: Number,
        default: 100},
    ownerID: String,
})

const GroupSchema = mongoose.model('GroupSchema', groupSchema);

export default GroupSchema