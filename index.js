const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./config/db');

require('dotenv').config();

// Task Middleware
app.use(express.static('./public'))
app.use(express.json())

// Task Routes
app.use('/api/v1/tasks', taskRoutes);

// Port to listen to
const port = 3000;

// Connect to database
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // Listen to port 3000
        app.listen(port, console.log(`Server started on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}

start();
