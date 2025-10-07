const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

app.use(express.json());

// Connectez-vous à MongoDB
mongoose.connect('mongodb://localhost/event-service', { useNewUrlParser: true, useUnifiedTopology: true });

// Modèle d'Événement
const Event = mongoose.model('Event', new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    description: String
}));

// Route pour créer un événement
app.post('/events', (req, res) => {
    const event = new Event(req.body);
    event.save().then(() => res.status(201).send(event));
});

app.listen(port, () => {
    console.log(`Service d'événements en écoute sur le port ${port}`);
});
