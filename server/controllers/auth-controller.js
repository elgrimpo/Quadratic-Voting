import passport from "passport";
import "../auth/passport.js";

// Client URL
const CLIENT_URL = "http://localhost:3000/";

// TODO: routes currently not referring to this document!

// GET Success --> /auth/login/success
export const getSuccess = (req, res) => {
  if (req.user) {
    console.log(req.user);
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
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
export const getGoogleAuthentication = async (req, res) => {
  passport.authenticate("google", { scope: ["profile"] });
};

// GET Google callback function --> /auth/google/callback
export const getGoogleCallback = async (req, res) => {
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  });
};
