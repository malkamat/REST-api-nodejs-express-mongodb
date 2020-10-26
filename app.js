const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser")
require("dotenv/config")

app.use(bodyParser.json())

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