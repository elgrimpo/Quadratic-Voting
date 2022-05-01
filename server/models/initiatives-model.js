import mongoose from 'mongoose'

const initiativeSchema = new mongoose.Schema({
    communityID: String,
    groupID: String,
    title: { type: String, required: true },
    image: String,
    description: String,
    status: String,
    //TODO: remove votes
    votes: {
        type: Number,
        default: 0},
    contributors: String,
    website: String,
    instagram: String,
    twitter: String,
    //TODO: remove totalVotes ???
    totalVotes: Number,
    ownerID: String,
    receivedVotes: Array,
    text: String
})


const InitiativeSchema = mongoose.model('InitiativeSchema', initiativeSchema);

export default InitiativeSchema