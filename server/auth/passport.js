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
  done(null, user);
});

passport.deserializeUser( async (obj, done) => {
  try {
    const id = obj._id;
    const user = await UserSchema.findById(id) || {};
    if (!user) done(null, false); // no user found
    done(null, user);
  } catch (err) {
    done(err);
  }});

// Set up Strategies
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, cb) {
      const user = await UserSchema.findOne({ googleId: profile.id });
      if (!user) {
        const newUser = await new UserSchema({
          googleId: profile.id,
          displayName: profile.displayName,
          image_url: profile._json.picture,
        }).save();
        cb(null, newUser);
      } else {
        cb(null, user);
      }

      /* User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      }); */
    }
  )
);
