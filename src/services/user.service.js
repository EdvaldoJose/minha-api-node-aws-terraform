// let users = [];

// exports.listUsers = () => {
//     return users;
// };

// exports.addUser = (data) => {
//     const user = { id: Date.now(), ...data };
//     users.push(user);
//     return user;
// };

const db = require('../db');

async function listUsers() {
  const { rows } = await db.query(
    'SELECT id, name, email, created_at FROM users ORDER BY id ASC'
  );
  return rows;
}

async function addUser(data) {
  const { name, email } = data;
  const { rows } = await db.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at',
    [name, email]
  );
  return rows[0];
}

module.exports = {
  listUsers,
  addUser
};

console.log("=> Service carregada!");
