let mg = require("mongoose")

let mySchema = new mg.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    enroll:{
        type:Number,
        unique:true,
        require:true
    }
    ,

    
    password:String,
    role:{
        type:String,
        enum:["Admin","Student"],
        default:"Student"
    },
    date:{
        type:Date,
        default:new Date()
    }
})
let student = new mg.model("student",mySchema)
module.exports = student