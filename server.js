const express = require('express');
const app = express();
const appPort = 3001

app.use('/', express.static('build'))

app.get('/', (req, res) => {
    console.log('HOME')
});

app.listen(appPort, () => {
    console.log(`Server executando em http://localhost:${appPort}`)
});