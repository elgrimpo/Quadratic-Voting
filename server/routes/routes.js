import express from "express";

//App imports
import {
  getInitiatives,
  createInitiative,
  updateInitiative,
  deleteInitiative,
} from "../controllers/initiatives-controller.js";
import {
  getGroups,
  createGroup,
  updateGroup,
  deleteGroup,
} from "../controllers/groups-controller.js";
import {
  getUsers,
  createUser,
  updateUser,
} from "../controllers/users-controller.js";
import {
  getSubscribedCommunities,
  getAllCommunities,
  createCommunity,
} from "../controllers/communities-controller.js";
import {
  getFail,
  getGoogleAuthentication,
  getGoogleCallback,
  getLogout,
  getSuccess,
} from "../controllers/auth-controller.js";

// auth TODO: create routers
const CLIENT_URL = "http://localhost:3000/";

export const AuthRouter = express.Router();

// authentication
AuthRouter.get("/login/success", getSuccess);
AuthRouter.get("/login/failed", getFail);
AuthRouter.get("/logout", getLogout);
AuthRouter.get("/google", getGoogleAuthentication);
AuthRouter.get("/google/callback", getGoogleCallback);

// communities
export const CommunityRouter = express.Router();

CommunityRouter.get("/", getSubscribedCommunities);
CommunityRouter.get("/all", getAllCommunities);
CommunityRouter.post("/", createCommunity); 

// groups
export const GroupRouter = express.Router();

GroupRouter.get("/", getGroups);
GroupRouter.post("/", createGroup);
GroupRouter.post("/:id", updateGroup);
GroupRouter.delete("/:id", deleteGroup);

// initiatives
export const InitiativeRouter = express.Router();

InitiativeRouter.get("/", getInitiatives);
InitiativeRouter.post("/", createInitiative);
InitiativeRouter.post("/:id", updateInitiative);
InitiativeRouter.delete("/:id", deleteInitiative);

// users
export const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.post("/", createUser); // frontend NOT YET IMPLEMENTED
UserRouter.post("/:id", updateUser);
