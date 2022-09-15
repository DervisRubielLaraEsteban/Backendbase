require('dotenv').config()

const { application } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(process.env.PORT,() => {
    console.log("Backend en ejecución en el puerto", process.env.PORT)
})