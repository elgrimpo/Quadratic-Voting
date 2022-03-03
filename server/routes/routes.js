import express from 'express'

//App imports
import {getInitiatives, createInitiative} from '../controllers/initiatives-controller.js'
import {getGroups, createGroup} from '../controllers/groups-controller.js'
import {getUsers, createUser} from '../controllers/users-controller.js'



// groups
export const GroupRouter = express.Router();

GroupRouter.get('/', getGroups);
GroupRouter.post('/', createGroup)  // frontend NOT YET IMPLEMENTED


// initiatives
export const InitiativeRouter = express.Router();

InitiativeRouter.get('/', getInitiatives);
InitiativeRouter.post('/', createInitiative)


// initiatives
export const UserRouter = express.Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', createUser) // frontend NOT YET IMPLEMENTED
