const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.json());

// Route for processing payment
app.post('/payment', (req, res) => {
    const { amount, ticketId } = req.body;
    // Payment processing logic here
    res.status(200).send({ message: 'Payment processed successfully', ticketId });
});

app.listen(port, () => {
    console.log(`Payment service listening on port ${port}`);
});