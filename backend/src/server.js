const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const cookieParser = require('cookie-parser')
const { connectDB } = require('./libs/db');
dotenv.config()

const app=express()
const PORT=process.env.PORT || 8000

const noteRoute=require('./routes/noteRoute')

app.use(express.json())
app.use(cookieParser())

app.use('/api/note', noteRoute)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Sever is running ${PORT}`);
    })
})