import express from "express";

//App imports
import {
  getInitiatives,
  createInitiative,
} from "../controllers/initiatives-controller.js";
import { getGroups, createGroup } from "../controllers/groups-controller.js";
import { getUsers, createUser } from "../controllers/users-controller.js";
import {
  getCommunities,
  createCommunity,
} from "../controllers/communities-controller.js";
import {
  getGoogleAuthentication,
  getGoogleCallback,
} from "../controllers/auth-controller.js";
import passport from "passport";

// auth TODO: create routers
const CLIENT_URL = "http://localhost:3000/phoenix";

export const AuthRouter = express.Router();
AuthRouter.get("/login/success", (req, res) => {
    console.log(req.user)
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
        //   cookies: req.cookies
      });
    } else {
        res.status(404).send()
    }
  });
  
  AuthRouter.get("/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "failure",
    });
  });
  
  AuthRouter.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
  });
  
  AuthRouter.get("/google", passport.authenticate("google", { scope: ["profile"] }));
  
  AuthRouter.get(
    "/google/callback",
    passport.authenticate("google", {
      successRedirect: CLIENT_URL,
      failureRedirect: "/login/failed",
    })
  );
/* 
AuthRouter.get("google/", getGoogleAuthentication);
AuthRouter.get("google/callback/", getGoogleCallback);
*/

// groups
export const CommunityRouter = express.Router();

CommunityRouter.get("/", getCommunities);
CommunityRouter.post("/", createCommunity); // frontend NOT YET IMPLEMENTED

// groups
export const GroupRouter = express.Router();

GroupRouter.get("/", getGroups);
GroupRouter.post("/", createGroup); // frontend NOT YET IMPLEMENTED

// initiatives
export const InitiativeRouter = express.Router();

InitiativeRouter.get("/", getInitiatives);
InitiativeRouter.post("/", createInitiative);

// users
export const UserRouter = express.Router();

UserRouter.get("/", getUsers);
UserRouter.post("/", createUser); // frontend NOT YET IMPLEMENTED
