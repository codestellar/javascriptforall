const express = require('express');
const connectDB = require('./db/connect');
const register = require('./routes/user');
const app = express();

const port = 3000;  

// Accpet JSON Post body
app.use(express.json());

app.use('/api', register);

start = async () => {
    // Connect DB
    await connectDB('mongodb+srv://gaurav:gaurav@cluster0.re35adw.mongodb.net/nextgen?retryWrites=true&w=majority');

    // Start Server
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    })
}

// Real important to prevent application from crashing
process.on('uncaughtException', function (error) {
    console.log(error.stack);
});

start();
