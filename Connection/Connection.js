let mg = require("mongoose")

let connection = async()=>{
    try {
        // await mg.connect("mongodb://localhost:27017/Lost")
        await mg.connect("mongodb+srv://himanshu2005_db_user:Khushieee1407@cluster0.ooka1sp.mongodb.net/Lost")
        console.log("Database Connnected")
    } catch (error) {
        console.log(error)
        
    }
}

module.exports = connection