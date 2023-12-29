const mongoose = require("mongoose")

async function main(){
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(
            "mongodb+srv://vncssz:6XnpUncgBap5Bza9@cluster0.ryhql4n.mongodb.net/?retryWrites=true&w=majority")
        console.log("on DB")
    } catch (error){
        console.log(`Erro: ${error}`)
    }
}
module.exports = main