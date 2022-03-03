// App imports
import UserSchema from '../models/users-model.js'


export const getUsers = async (req, res) => {
    try {
        const userSchemas = await UserSchema.find()
        res.status(200).json(userSchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


// frontend NOT YET IMPLEMENTED
export const createUser = async (req, res) => {
    const user = req.body
    const newUser = new UserSchema(user)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}