import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import usersRoutes from './routes/users.route.js'

import connectToDB from './db/connect.js'
import { app, server } from './socket/socket.js'

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', userRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/users', usersRoutes)

app.use(express.static(path.join(__dirname, '/frontend/dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'))
})

server.listen(PORT, () => {
    connectToDB()
    console.log(`Server running on port: ${PORT}`)
})