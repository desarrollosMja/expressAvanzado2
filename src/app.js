const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8080
const server = app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))
const serverRoutes = require("./router.js")

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors("*"))

serverRoutes(app)

