import passport from "passport";
import * as dotenv from 'dotenv'
dotenv.config()

// Client URL
const CLIENT_URL = "https://steady-pixie-391ae4.netlify.app";

// GET Success --> /auth/login/success
export const getSuccess = (req, res) => {
  console.log("/auth/login/success invoked")
  console.log("req.user:")
  console.log(req.user)
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
  console.log("/auth/login/failed invoked")
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
  console.log("/auth/google invoked");
  const handler = passport.authenticate("google", { scope: ["profile"] });
  handler(req, res, next)
};

// GET Google callback function --> /auth/google/callback
export const getGoogleCallback = async (req, res, next) => {
  console.log("/auth/google/callback invoked");
  const handler = passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  });
  handler(req, res, next);
}; 

// export const getChatToken = (req, res) => {
//   const token = process.env.STREAMCHAT_API_KEY
//   res.status(200).json(token)
// }