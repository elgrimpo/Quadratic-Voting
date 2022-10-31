import passport from "passport";
import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";


// Client URL
const CLIENT_URL = "http://localhost:3000/";

// GET Success --> /auth/login/success
export const getSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  } else {
    res.status(404).send();
  }
};

// GET Fail --> /auth/login/failed
export const getFail = async (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};

// GET Logout --> /auth/logout
export const getLogout = async (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
};

// GET Google authentication --> /auth/google 
export const getGoogleAuthentication = async (req, res, next) => {
  const handler = passport.authenticate("google", { scope: ["profile"] });
  handler(req, res, next)
};

// GET Google callback function --> /auth/google/callback
export const getGoogleCallback = async (req, res, next) => {
  const handler = passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  });
  handler(req, res, next);
}; 

export const getChatToken = (res) => {
  const token = process.env.STREAMCHAT_API_KEY
  res.status(200).json(token)
}