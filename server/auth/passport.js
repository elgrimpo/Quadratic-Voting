import passport from "passport";
import UserSchema from "../models/users-model.js";
import mongoose from "mongoose";
import GoogleOAuth from "passport-google-oauth20";
const GoogleStrategy = GoogleOAuth.Strategy;

// ID's and Secrets
const GOOGLE_CLIENT_ID =
  "732241602052-m94ll4444r5k2d4kdcovcbugv1onic50.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

//Serialize and Deserialize Users
passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser((id, done) => {
    done(null, id);
  });

// Set up Strategies
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      return done(null, profile)
      /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      }); */
    }
  )
);



