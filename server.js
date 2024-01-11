const express = require('express');
const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});