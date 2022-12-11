const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Flostgres",
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async (query) => {
    try {
        await pool.connect();
        await pool.query(query);

        return true;
    } catch (error) {
        console.log(error.stack);

        return false;
    }
}



const createPostsTable = `
    CREATE TABLE IF NOT EXISTS posts
    (
        id       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        "timestamp" TIMESTAMP WITHOUT TIME ZONE NOT NULL,
        content  text                        NOT NULL
    );
`;

const createUsersTable = `
    CREATE TABLE IF NOT EXISTS "users"
    (
        id       uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email    VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL
    );`;


execute(createPostsTable).then(result => {
    if (result) {
        console.log('Table "posts" created');
    }
});


execute(createUsersTable).then(result => {
    if (result) {
        console.log('Table "users" is created');
    }
});

module.exports = pool;