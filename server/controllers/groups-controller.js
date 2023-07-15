// App imports
import GroupSchema from '../models/groups-model.js'

// GET Groups --> /groups/
export const getGroups = async (req, res) => {
  const filters = req.query
  let query = {};
  if (Object.keys(filters).length > 0) {
  if(filters.communityId) {
    query.communityId = filters.communityId
  }
    try {
        const groupSchemas = await GroupSchema.find(query)
        res.status(200).json(groupSchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
  } 
}

// CREATE Group --> /groups/
export const createGroup = async (req, res) => {
    const group = req.body
    const newGroup = new GroupSchema(group)
    try {
        await newGroup.save()
        res.status(201).json(newGroup)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}

// UPDATE GROUP --> /groups/:id
export const updateGroup = async (req, res) => {
    const group = req.body;
    const options = { new: true };
    try {
      const updatedGroup = await GroupSchema.findByIdAndUpdate(
        { _id: req.params.id },
        group,
        options
      );
      res.status(201).json(updatedGroup);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  // DELETE GROUP --> /groups/:id
export const deleteGroup = async (req, res) => {
  GroupSchema.findByIdAndRemove(req.params.id)
    .then((group) => {
      if (!group) {
        return res.status(404).send({
          message: "Group not found with id " + req.params.id,
        });
      }
      res.send(req.params.id);
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Group not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete group with id " + req.params.id,
      });
    });
};
