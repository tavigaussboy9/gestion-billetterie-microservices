const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Route for processing payment
app.post('/payment', (req, res) => {
    const { amount, ticketId } = req.body;
    
    // Validate request body
    if (typeof amount !== 'number' || amount <= 0 || typeof ticketId !== 'string') {
        return res.status(400).send({ message: 'Invalid request body. Amount must be a positive number and ticketId must be a string.' });
    }
    
    // Payment processing logic here
    res.status(200).send({ message: 'Payment processed successfully', ticketId });
});

app.listen(port, () => {
    console.log(`Payment service listening on port ${port}`);
});