const express = require("express")
const app = express()
const db = require("./db")
const path = require("path")
const port = 3000

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/explorar", (req, res) => {
    res.render("explorar")
})

app.get("/postar", (req, res) => {
    res.render("postar")
})

app.listen(port, () => {
    console.log("Servidor rodando na porta ", port)
})