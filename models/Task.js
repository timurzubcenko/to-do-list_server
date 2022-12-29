const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        require: false
    },
    delete: {
        type: Boolean,
        require: false
    },
})

module.exports = Task = mongoose.model('task', taskSchema)