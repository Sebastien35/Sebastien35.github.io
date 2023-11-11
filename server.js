const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const fs = require('fs'); 

const app = express();
const port = 8081;

app.use(cors()); 
app.use(bodyParser.json()); 

app.get('',)

app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});