const express = require('express');
const app = express();
const port = 4000;
const dirname = 'public';

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: dirname });
});

app.get('/data', (req, res) => {
    const data = require('./data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});