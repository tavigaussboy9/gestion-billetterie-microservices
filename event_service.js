const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/event-service', { useNewUrlParser: true, useUnifiedTopology: true });

// Event Model
const Event = mongoose.model('Event', new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String
}));

// Route to create an event
app.post('/events', (req, res) => {
    const event = new Event(req.body);
    event.save().then(() => res.status(201).send(event));
});

app.listen(port, () => {
    console.log(`Event service listening on port ${port}`);
});