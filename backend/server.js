const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

// Use http://127.0.0.1:8000/
// localhost isn't working
app.get('/api/posts', (req, res) => {
    res.json('Hello World');
});

app.listen(process.env.PORT || 8000, () => {
    console.log("Backend server is running");
});