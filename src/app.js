const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ status: 'Sua API >>> está rodando OK! :)' }));
app.use('/users', userRoutes);

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', uptime: process.uptime() });
});

console.log("=> Rotas de /users carregada!");

module.exports = app;
