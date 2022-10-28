import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import cookieSession from 'cookie-session'
import './auth/passport.js'
import * as dotenv from 'dotenv'

// App imports
import {
  CommunityRouter,
  InitiativeRouter,
  GroupRouter,
  UserRouter,
  AuthRouter,
} from "./routes/routes.js";


dotenv.config()

const app = express();

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json())

app.use("/auth", AuthRouter);
app.use("/communities", CommunityRouter);
app.use("/initiatives", InitiativeRouter);
app.use("/groups", GroupRouter);
app.use("/users", UserRouter);

//app.use(bodyParser.json({limit: '30mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Listening to port ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set("debug", true);
