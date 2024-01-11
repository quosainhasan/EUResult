const express = require('express');
const app = express();
const port = 4000;
const dirname = 'public';
const fs = require('fs');

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.sendFile('./index.html', { root: dirname });
// });

app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading data');
      } else {
        res.json(JSON.parse(data));
      }
    });
  });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;