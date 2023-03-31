const Task = require('../models/Task')

// Retrieve all tasks
const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({});
        res.status(200).json({ "Tasks": allTasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Create a task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get single task
const getTask = async (req, res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOne({ _id:taskId });

        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        }
        res.status(200).json({ Task: task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a task
const updateTask = (req, res) => {
    res.send('Update Task')
}

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const {id:taskId} = req.params;
        const task = await Task.findByIdAndDelete({_id:taskId});

        if (!task) {
            return res.status(404).json({ message: "No task with this ID was found!" });
        }
        res.status(200).json({ message: "Task deleted successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
