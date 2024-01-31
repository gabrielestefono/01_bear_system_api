// index.js ou app.js
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/Routes');

const app = express();
const url = 'mongodb://localhost:27017/taskfy';

mongoose.connect(url);

app.use(express.json());

routes(app);

const PORT = 3000;
app.listen(PORT, () => {console.log(`Servidor rodando na porta ${PORT}`);});
