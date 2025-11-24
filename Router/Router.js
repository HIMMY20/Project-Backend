let ex = require("express")
let app = ex()
let router = ex.Router()
let {signup,login} = require("../Controller/Controller")


router.post("/signup",signup)
router.post("/login",login)

 module.exports = router