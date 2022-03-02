import mongoose from 'mongoose'

const initiativeSchema = new mongoose.Schema({
    id: Number,
    communityID: Number,
    groupID: Number,
    title: { type: String, required: true },
    image: String,
    description: String,
    status: String,
    votes: {
        type: Number,
        default: 0},
    userID: Number,
    contributors: String,
    website: String,
    instagram: String,
    twitter: String,
    totalVotes: Number,
    ownerID: Number,
    userVotes: {
        type: Number,
        default: 0},
    text: String
})


const InitiativeSchema = mongoose.model('InitiativeSchema', initiativeSchema);

export default InitiativeSchema