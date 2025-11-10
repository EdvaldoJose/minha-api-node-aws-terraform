// const { Router } = require('express');
// const { getUsers, createUser } = require('../controllers/user.controller');

// const router = Router();

// router.get('/', (req, res) => res.send("USERS OK!"));

// router.post('/', createUser);
// console.log("=> Arquivo user.routes.js carregado!");

// module.exports = router;

const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/user.controller');

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

module.exports = router;
