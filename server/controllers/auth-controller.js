import passport from "passport";
import UserSchema from "../models/users-model.js";
import mongoose from "mongoose";
import GoogleOAuth from "passport-google-oauth20";
import '../auth/passport.js'

// Client URL
const CLIENT_URL = "http://localhost:3000/";

// GET Success
export const getSuccess = (req, res) => {
    if (req.user) {
        res.status(200).json({
          success: true,
          message: "successfull",
          user: req.user,
          //   cookies: req.cookies
        });
      }
};

// GET Fail
export const getFail = async (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};

// GET Logout
export const getLogout = async (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};

// GET Google authentication
export const getGoogleAuthentication = async (req, res) => {
    passport.authenticate("google", { scope: ["profile"] });
};

// GET Google callback function
export const getGoogleCallback = async (req, res) => {
    passport.authenticate("google", {
        successRedirect: CLIENT_URL,
        failureRedirect: "/login/failed",
      })
};
