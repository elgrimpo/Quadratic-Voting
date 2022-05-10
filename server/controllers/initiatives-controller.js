// App imports
import InitiativeSchema from "../models/initiatives-model.js";


// GET Initiatives --> /initiatives/
export const getInitiatives = async (req, res) => {
  const ids = req.query.subscriptions
  try {
    const initiativeSchemas = await InitiativeSchema.find({ 'communityId':  {$in: ids} });
    res.status(200).json(initiativeSchemas);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// CREATE Initiative --> /initiatives/
export const createInitiative = async (req, res) => {
  const initiative = req.body;
  const newInitiative = new InitiativeSchema(initiative);
  try {
    await newInitiative.save();
    res.status(201).json(newInitiative);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// UPDATE Initiative --> /initiatives/:id
export const updateInitiative = async (req, res) => {
  const initiative = req.body;
  const options = { new: true };
  try {
    const initiativeSchemas = await InitiativeSchema.findByIdAndUpdate(
      { _id: req.params.id },
      initiative,
      options
    );
    res.status(201).json(initiativeSchemas);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// DELETE Initiative --> /initiatives/:id
export const deleteInitiative = async (req, res) => {
  InitiativeSchema.findByIdAndRemove(req.params.id)
    .then((initiative) => {
      if (!initiative) {
        return res.status(404).send({
          message: "Initiative not found with id " + req.params.id,
        });
      }
      res.send(req.params.id);
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Initiative not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Could not delete initiative with id " + req.params.id,
      });
    });
};
