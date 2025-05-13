// backend/app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint per la connessione
app.get('/check-connection', (req, res) => {
    res.json({ message: 'Sono connesso' });
});

app.listen(port, () => {
    console.log(`Server backend in esecuzione su http://localhost:${port}`);
});
