const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db.js')

const app = express();
connectDB()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))

const tasks = require('./routers/api/tasks')
app.use('/api/tasks', tasks)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log('listening on port' + PORT)
})