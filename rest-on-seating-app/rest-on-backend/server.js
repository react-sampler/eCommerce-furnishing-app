import { errorHandler, notFound } from './middleware/errorMiddleware.js';

import color from 'colors'
import connectDb from "./config/db.js";
import dotenv from 'dotenv'
import express from 'express'
import productRoutes from './routes/productRoutes.js'

// import products from './data/products.js'

const app = express()



dotenv.config()

connectDb();



app.get('/', (req, res) => {
    res.send('API is running...')
})


app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)