


const express = require("express");
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors())
const server = 4000
app.listen(server, () => {console.log(`Server is runing on port ${server}`)})

app.get(`/api/users`, (req, res) => {
    let friends = [`Azari` , `David`, `Mark`, `Chelsea`, `Glida`];
    res.status(200).send(friends);
})
app.get(`/weather/:temperature`, (req, res) => {
    const {temperature} = req.params
    const phrase = `<h3> It was ${temperature} today</h3>`
    res.status(200).send(phrase);




})