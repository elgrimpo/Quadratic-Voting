// App imports
import CommunitySchema from '../models/communities-model.js'

// GET Communities --> /communities/
export const getCommunities = async (req, res) => {
    try {
        const communitySchemas = await CommunitySchema.find()
        res.status(200).json(communitySchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// CREATE Community --> /communities/
// TODO: frontend not yet implemented
export const createCommunity = async (req, res) => {
    const community = req.body
    const newCommunity = new CommunitySchema(community)
    try {
        await newCommunity.save()
        res.status(201).json(newCommunity)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}