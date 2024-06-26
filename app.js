// import needed dmodules
const express = require("express")
require ("dotenv").config()
const db = require("./config/dbConfig")



// creat express application
const app = express()


//body-parser middleware
app.use(express.urlencoded({extended: false}))



//routes
app.use('/', require('./routes/index'))
app.use('/voters', require('./routes/voters'))
app.use('/election', require('./routes/election'))
app.use('/candidate', require('./routes/candidate'))
app.use('/ballot', require('./routes/ballot'))
app.use('/admin', require('./routes/admin'))



//create port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

