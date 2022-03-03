import mongoose from 'mongoose'

const initiativeSchema = new mongoose.Schema({
    communityID: String,
    groupID: String,
    title: { type: String, required: true },
    image: String,
    description: String,
    status: String,
    votes: {
        type: Number,
        default: 0},
    contributors: String,
    website: String,
    instagram: String,
    twitter: String,
    totalVotes: Number,
    ownerID: String,
    userVotes: {
        type: Number,
        default: 0},
    text: String
})


const InitiativeSchema = mongoose.model('InitiativeSchema', initiativeSchema);

export default InitiativeSchema