const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.all('*', (req, res) => {
    res.sendStatus(400);
    res.send('Bad Request');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})