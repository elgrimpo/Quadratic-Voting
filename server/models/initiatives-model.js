import mongoose from 'mongoose'

const Schema = mongoose.Schema
//TODO: Update MongoDB
const initiativeSchema = new mongoose.Schema({
    communityId: Schema.Types.ObjectId,
    groupId: Schema.Types.ObjectId,
    title: { type: String, required: true },
    image_url: {
        type: String,
        default: "https://images.unsplash.com/photo-1586527155101-48f717fe11c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
     },
    description: String,
    status: {
        type: String,
        default: "open"
        },
    website: String, // TODO: Convert to Array
    instagram: String,
    twitter: String,
    receivedVotes: [{
        userId: Schema.Types.ObjectId,
        votes: Number
    }],
    members: [{
        userId: Schema.Types.ObjectId,
        role: String
    }],
    text: String
})


const InitiativeSchema = mongoose.model('InitiativeSchema', initiativeSchema);

export default InitiativeSchema