const express = require('express')
const app = express();
const port = 3000;

app.get('/myRoute', (req, res) => {
    res.send('Hola Mundo');
})

app.use(express.static('public'))

app.listen(port, () => {
    console.log('Server listening' + ` at http://localhost:${port}`)
})