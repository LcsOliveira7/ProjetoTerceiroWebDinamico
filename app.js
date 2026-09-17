const express = require("express")
const app = express()
const db = require("./db")
const path = require("path")
const port = 3000

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})