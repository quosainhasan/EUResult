const express = require('express');
const app = express();
const port = 4000;
const dirname = 'public';
const fs = require('fs');
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());

// app.get('/', (req, res) => {
//     res.sendFile('./index.html', { root: dirname });
// });

cors({ credentials: true, origin: true ,
    fetchOptions: {
        mode: 'no-cors',
    },

});

app.get('/data', (req, res) => {
    // const data = JSON.parse(fs.readFileSync('data.json'));
    const data = require('./api/data.json');
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});