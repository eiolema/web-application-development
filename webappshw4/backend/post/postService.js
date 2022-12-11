const pool = require('../database');

const getPost = async (id) => {
    return await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
}

const getAllPosts = async () => {
    return await pool.query("SELECT * FROM posts");
}

const deleteOnePost = async (id) => {
    return await pool.query("DELETE FROM posts WHERE id = $1 RETURNING 1", [id]);
}

const deleteAll = async () => {
    return await pool.query("DELETE FROM posts RETURNING 1")
}

const addPost = async (content) => {
    const date = new Date();
    return await pool.query('INSERT INTO posts("timestamp", content) values ($1, $2) RETURNING *', [date.toISOString(), content]);
}

const editPost = async (id, content) => {
    return await pool.query("UPDATE posts set content = $1 WHERE id = $2 RETURNING *", [content, id]);
}

module.exports = {getPost, getAllPosts, deleteOnePost, deleteAll, addPost, editPost};