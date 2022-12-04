const pool = require('../database');
const jwt = require("jsonwebtoken");


const generateJWT = (id) => {
    return jwt.sign({id}, secret, {expiresIn: maxAge});
}

const secret = 'eshBDJd4n81vfHViPz99VbVKpDhI92eD';
const maxAge = 60 * 60;

const addUser = async (email, password) => {
    return await pool.query("INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, password]);
}

const getUser = async (email) => {
    return await pool.query("SELECT * FROM users WHERE email = $1", [email]);
}

module.exports = {addUser, getUser};