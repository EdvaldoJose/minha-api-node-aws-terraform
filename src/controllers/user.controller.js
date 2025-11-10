
// ------------------1 camada da api---------------------------------------

// const { listUsers, addUser } = require('../services/user.service');

// exports.getUsers = (req, res) => {
//     const users = listUsers();
//     res.json(users);
// };

// exports.createUser = (req, res) => {
//     const newUser = addUser(req.body);
//     res.status(201).json(newUser);
// };

// console.log("=> Controller carregado!");

// ------------------2 camada da api com db-----------------------------------

// const { listUsers, addUser } = require('../services/user.service');

// exports.getUsers = async (req, res) => {
//     try {
//         const users = await listUsers();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error'});
//     }
// };

// exports.createUser = async (req, res) => {
//     try {
//         const user = await addUser(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ error: 'Bad request'});
//     }
// };

// console.log("=> Controller carregado!");

// ------------------3 camada da api com db e tratamento de erros-------------------------------

// src/controllers/user.controller.js

exports.getUsers = async (req, res) => {
    try {
        // Mock de dados (simula retorno do banco)
        const users = [
            { id: 1, name: 'Edvaldo José' },
            { id: 2, name: 'Karina' },
            { id: 3, name: 'Lucia' },
        ];

        res.json(users);
    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'O campo name é obrigatório' });
        }

        // Mock de criação
        const newUser = { id: Date.now(), name };

        console.log('Novo usuário criado:', newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(400).json({ error: 'Bad request' });
    }
};

console.log('=> Controller de teste carregado!');
