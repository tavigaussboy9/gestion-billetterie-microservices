const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.json());

// Route pour traiter le paiement
app.post('/payment', (req, res) => {
    const { amount, ticketId } = req.body;
    // Logique de traitement du paiement ici
    res.status(200).send({ message: 'Payment processed successfully', ticketId });
});

app.listen(port, () => {
    console.log(`Service de paiement en écoute sur le port ${port}`);
});