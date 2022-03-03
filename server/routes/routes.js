import express from 'express'

//App imports
import {getInitiatives, createInitiative} from '../controllers/initiatives-controller.js'
import {getGroups, createGroup} from '../controllers/groups-controller.js'
import {getUsers, createUser} from '../controllers/users-controller.js'
import {getCommunities, createCommunity} from '../controllers/communities-controller.js'


// groups
export const CommunityRouter = express.Router();

CommunityRouter.get('/', getCommunities);
CommunityRouter.post('/', createCommunity)  // frontend NOT YET IMPLEMENTED


// groups
export const GroupRouter = express.Router();

GroupRouter.get('/', getGroups);
GroupRouter.post('/', createGroup)  // frontend NOT YET IMPLEMENTED


// initiatives
export const InitiativeRouter = express.Router();

InitiativeRouter.get('/', getInitiatives);
InitiativeRouter.post('/', createInitiative)


// users
export const UserRouter = express.Router();

UserRouter.get('/', getUsers);
UserRouter.post('/', createUser) // frontend NOT YET IMPLEMENTED
