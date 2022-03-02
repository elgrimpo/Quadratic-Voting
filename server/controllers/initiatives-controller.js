// App imports
import InitiativeSchema from '../models/initiatives-model.js'


export const getInitiatives = async (req, res) => {
    try {
        const initiativeSchemas = await InitiativeSchema.find()
        res.status(200).json(initiativeSchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createInitiative = async (req, res) => {
    const initiative = req.body
    const newInitiative = new InitiativeSchema(initiative)
    try {
        await newInitiative.save()
        res.status(201).json(newInitiative)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}