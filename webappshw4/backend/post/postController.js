const postsService = require('./postService');


//todo: add jwt verify to every request
const get = async (req, res) => {
    try {
        const post = await postsService.getPost(req.params.id);
        if (post.rows.length > 0) {
            res
                .status(200)
                .json(post.rows[0])
                .send;
        } else {
            res.status(404).json({error: `Post with id ${req.params.id} not found`})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAll = async (req, res) => {
    try {
        const post = await postsService.getAllPosts();
        res
            .status(200)
            .json(post.rows)
            .send;

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteOne = async (req, res) => {
    try {
        const result = await postsService.deleteOnePost(req.params.id)
        if (result.rows.length > 0) {
            res.status(201).json().send;
        } else {
            res.status(404).json({error: `Post with id ${req.params.id} not found`})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteAll = async (req, res) => {
    try {
        const result = await postsService.deleteAll;
        console.log('deleted '  + result.rows + ' rows')
        res.status(201).json().send;

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const add = async (req, res) => {
    try {
        const result = await postsService.addPost(req.body.content)
        res.status(201).json(result.rows[0]).send;
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const edit = async (req, res) => {
    try {
        const post = await postsService.editPost(req.params.id, req.body.content);
        if (post.rows.length > 0) {
            res
                .status(200)
                .json(post.rows[0])
                .send;
        } else {
            res.status(404).json({error: `Post with id ${req.params.id} not found`})
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {get, getAll, deleteOne, deleteAll, add, edit}