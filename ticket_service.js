const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3002;

app.use(express.json());

// Connect to MongoDB
const dbName = process.env.DB_NAME || 'ticket-service';
mongoose.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

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