const express = require('express');
const router = express.Router()
const Task = require('../../models/Task')

router.get('/test', (req, res) => res.send('book route testing!'));

router.get('/', (req, res) => {
    Task.find()
        .then((tasks) => {
            res.json(tasks)
        })
        .catch((err) => {
            res.status(404).json({ error: "No tasks found" })
        })
})

//Изменение статуса done
router.get("/done/:id", (req, res) => {
    Task.findById(req.params.id)
        .then((task) => {
            Task.findByIdAndUpdate(req.params.id, { done: !task.done })
                .then(() => {
                    res.json({ done: !task.done })
                })
                .catch((err) => {
                    res.status(404).json({
                        error: "No Update task"
                    })
                })
        })
        .catch((err) => {
            res.status(404).json({
                error: "No Task Found"
            })
        })
})

//Добавить
router.post('/', (req, res) => {
    console.log(req.body)
    Task.create(req.body)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.status(400).json({
                error: "Unable to add this task"
            })
        })
})

//Запрос для удаления конкретной книги
router.delete('/:id', (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then((task) => {
            res.json({ msg: "task delete" })
        })
        .catch((err) => {
            res.status(400).json({
                error: "Unable to delete this book"
            })
        })
})

module.exports = router