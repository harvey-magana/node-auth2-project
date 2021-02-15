const db = require('../../database/connection.js');

module.exports = {
    add, 
    find, 
    findBy,
    findById
}

function find() {
    return db('users as u')
        .select('u.id', 'u.username', 'u.department')
}

function findBy(user) {
    return db('users as u')
        .select('u.id', 'u.username', 'u.password', 'u.department')
        .where(user)
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
}

function findById(id) {
    return db('users as u')
        .select('u.id', 'u.username', 'u.department')
        .where('u.id', id)
        .first();
}
