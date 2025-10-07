const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

// Route to send a notification
app.post('/notify', (req, res) => {
    const { message, userId } = req.body;
    // Input validation
    if (!message && !userId) {
        return res.status(400).send({ message: 'Message and User ID are required', status: 'error' });
    } else if (!message) {
        return res.status(400).send({ message: 'Message is required', status: 'error' });
    } else if (!userId || typeof userId !== 'string' || userId.trim() === '') {
        return res.status(400).send({ message: 'User ID is required and must be a non-empty string', status: 'error' });
    }
    // Logic to send a notification
    console.log(`Notification sent to user ${userId}: ${message}`);
    res.status(200).send({ message: 'Notification sent successfully', status: 'success' });
});

app.listen(port, () => {
    console.log(`Notification service listening on port ${port}`);
});