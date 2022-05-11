// App imports
import CommunitySchema from '../models/communities-model.js'

// GET Subscribed Communities --> /communities/
export const getSubscribedCommunities = async (req, res) => {
    try {
        const ids = req.query.subscriptions
        const communitySchemas = await CommunitySchema.find({ '_id':  {$in: ids} } )
        res.status(200).json(communitySchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// GET All Communities --> /communities/all
export const getAllCommunities = async (req, res) => {
    try {
        const communitySchemas = await CommunitySchema.find({} )
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