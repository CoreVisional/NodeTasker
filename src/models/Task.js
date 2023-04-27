const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Must provide a task title'],
        trim: true,
        maxlength: [80, 'Task title cannot be more than 80 characters']
    },
    is_completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema);
