let ex = require("express")
let app = ex()
let cors = require("cors")
let router = require("./Router/Router")
let connection = require("./Connection/Connection")

connection()
app.use(cors())
app.use(ex.json())
app.use(router)


app.listen(5000, ()=> console.log("Server running in port 5000"));
