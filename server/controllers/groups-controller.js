// App imports
import GroupSchema from '../models/groups-model.js'

// GET GROUPS
// /groups/
export const getGroups = async (req, res) => {
    try {
        const groupSchemas = await GroupSchema.find()
        res.status(200).json(groupSchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// CREATE GROUP
// /groups/
// Frontend NOT YET IMPLEMENTED
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

// UPDATE GROUP
// /groups/:id
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
