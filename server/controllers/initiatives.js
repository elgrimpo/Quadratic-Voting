// App imports
import InitiativeMessage from '../models/initiatives.js'


export const getInitiatives = async (req, res) => {
    try {
        const initiativeMessages = await InitiativeMessage.find()
        res.status(200).json(initiativeMessages)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createInitiative = async (req, res) => {
    const initiative = req.body
    const newInitiative = new InitiativeMessage(initiative)
    try {
        await newInitiative.save()
        res.status(201).json(newInitiative)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}