const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 3000;
const routes = require('./routes');

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: false }));
app.use(express.json());
app.use(cookieParser());

app.use('/', routes);

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});

