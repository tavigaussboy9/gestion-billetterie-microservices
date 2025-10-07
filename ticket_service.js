const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ticket-service', { useNewUrlParser: true, useUnifiedTopology: true });

// Ticket Model
const Ticket = mongoose.model('Ticket', new mongoose.Schema({
    eventId: String,
    userId: String,
    status: { type: String, enum: ['reserved', 'purchased'], default: 'reserved' }
}));

// Route to purchase a ticket
app.post('/tickets', (req, res) => {
    const ticket = new Ticket(req.body);
    ticket.save().then(() => res.status(201).send(ticket));
});

app.listen(port, () => {
    console.log(`Ticket service listening on port ${port}`);
});