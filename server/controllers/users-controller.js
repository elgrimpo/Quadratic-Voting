// App imports
import UserSchema from '../models/users-model.js'

// GET Users --> /users/
export const getUsers = async (req, res) => {
    try {
        const userSchemas = await UserSchema.find()
        res.status(200).json(userSchemas)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

// Create User --> /users/
// TODO: frontend NOT YET IMPLEMENTED
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

// UPDATE User --> /users/:id
export const updateUser = async (req, res) => {
    const user = req.body;
    const options = { new: true };
    try {
      const userSchemas = await UserSchema.findByIdAndUpdate(
        { _id: req.params.id },
        user,
        options
      );
      res.status(201).json(userSchemas);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };