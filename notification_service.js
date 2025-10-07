const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

// Route to send a notification
app.post('/notify', (req, res) => {
    const { message, userId } = req.body;
    // Input validation
    if (!message || !userId) {
        return res.status(400).send({ message: 'Invalid input', status: 'error' });
    }
    // Logic to send a notification
    console.log(`Notification sent to user ${userId}: ${message}`);
    res.status(200).send({ message: 'Notification sent successfully', status: 'success' });
});

app.listen(port, () => {
    console.log(`Notification service listening on port ${port}`);
});