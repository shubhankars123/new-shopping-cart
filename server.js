import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import {connectDB} from "./config/db.js"
import authRoutes from "./routes/authRoute.js"

//configure env
dotenv.config()

// rest object 
const app = express()

// Database config
connectDB()

// PORT 
const PORT = process.env.PORT || 8000;
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use(`/api/v1/auth`, authRoutes)


// rest api 
app.get('/', (req, res)=>{
    res.send({
        message : "Welcome to ecommerce App"
    })
})

app.get('/home', (req, res)=>{
    res.send({})
})



// run listen
app.listen(8000, ()=>{
    console.log(`Server is running on ${process.env.DEV_MODE} port : ${PORT}.`)
})

