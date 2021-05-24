import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'


import Cards from './dbCards.js'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:TwczIy2ivHqqT1B1@cluster0.0uwjj.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middlewares
app.use(express.json())
app.use(Cors())

//DBconfig
mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoint
app.get("/", (req, res) => res.status(200).send("im ON"))

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body

    Cards.create(dbCard, (error, data) => {
        if(error){
            res.status(500).send(error)
        }
        else{
            res.status(201).send(data)
        }
    })
} )

app.get("/tinder/cards", (req, res) => {
    Cards.find((error, data) => {
        if(error){
            res.status(500).send(error)
        }
        else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`listening on localhost ${port} `) )