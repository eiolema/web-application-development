const userService = require('./userService');
const bcrypt = require('bcrypt');

//todo: return cookie with response
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.getUser(email)
        if (user.rows.length > 0) {
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            if(!validPassword) {
                return res.status(401).json({ error: "Incorrect password" });
            }
            res
                .status(200)
                .json({ userId: user.rows[0].id })
                .send;
        } else {
            res.status(401).json({error: `User is not registered`}).send;
        }
    } catch (error) {
        res.status(400).json({error: error.message}).send;
    }
}

//todo: return cookie with response
const signup = async (req, res) => {
    try {
        const {email, password} = req.body;
        const salt = await bcrypt.genSalt();
        const bcryptPassword = await bcrypt.hash(password, salt);
        const user = await userService.addUser(email, bcryptPassword);
        res
            .status(201)
            .json({ userId: user.rows[0].id })
            .send;
    } catch (error) {
        res.status(400).json({error: error.message}).send;
    }

}

//todo: clear cookie
const logout = async (req, res) => {
    res
        .status(202)
        .json({message: "User logged out"})
        .send;
}

module.exports = {login, signup, logout};