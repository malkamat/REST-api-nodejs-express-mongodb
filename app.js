const express = require("express")
const mongoose = require("mongoose")
const app = express()
require("dotenv/config")

//import routes
const postsRoute = require("./routes/posts")


//middlewares
app.use("/posts", postsRoute)

//ROUTES
app.get("/", (req,res) => {
    res.send("we are on home")
})


//connect to mongodb
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true },
 () => {
    console.log("connected to mongodb");
})

//star listen the server
app.listen(3000)