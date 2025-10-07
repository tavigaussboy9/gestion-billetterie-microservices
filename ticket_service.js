const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

app.use(express.json());

// Connectez-vous à MongoDB
mongoose.connect('mongodb://localhost/ticket-service', { useNewUrlParser: true, useUnifiedTopology: true });

// Modèle de Billet
const Ticket = mongoose.model('Ticket', new mongoose.Schema({
    eventId: String,
    userId: String,
    status: { type: String, enum: ['reserved', 'purchased'], default: 'reserved' }
}));

// Route pour acheter un billet
app.post('/tickets', (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save().then(() => res.status(201).send(ticket));
});

app.listen(port, () => {
    console.log(`Service de billets en écoute sur le port ${port}`);
});
