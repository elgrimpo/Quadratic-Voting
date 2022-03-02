import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

// App imports
import {InitiativeRouter, GroupRouter} from './routes/routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/initiatives', InitiativeRouter)
app.use('/groups', GroupRouter)


//app.use(bodyParser.json({limit: '30mb', extended: true}))
//app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))


const CONNECTION_URL = 'mongodb+srv://elgrimpo:ChenTriMau12@cluster0.eyuyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true})
    .then(() => app.listen(PORT, () => console.log(`Listening to port ${PORT}`)) )
    .catch((error) => console.log(error.message))

mongoose.set('debug', true)