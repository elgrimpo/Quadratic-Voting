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

export const updateCommunity = async (req, res) => {
    const community = req.body;
    const options = { new: true };
    try {
      const updatedCommunity = await CommunitySchema.findByIdAndUpdate(
        { _id: req.params.id },
        community,
        options
      );
      res.status(201).json(updatedCommunity);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  export const deleteCommunity = async (req, res) => {
    CommunitySchema.findByIdAndRemove(req.params.id)
      .then((community) => {
        if (!community) {
          return res.status(404).send({
            message: "Community not found with id " + req.params.id,
          });
        }
        res.send(req.params.id);
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            message: "Community not found with id " + req.params.id,
          });
        }
        return res.status(500).send({
          message: "Could not delete community with id " + req.params.id,
        });
      });
  };