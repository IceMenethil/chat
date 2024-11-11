import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import usersRoutes from './routes/users.route.js'

import connectToDB from './db/connect.js'

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', userRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', usersRoutes)


app.listen(PORT, () => {
    connectToDB()
    console.log(`Server running on port: ${PORT}`)
})