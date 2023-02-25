const express = require('express');
require('dotenv-safe');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS
mongoose
.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.ztnmhf4.mongodb.net/?retryWrites=true&w=majority`,
)
.then(() => {
    app.listen(3338)
    console.log("Conectou ao Banco de Dados!")
})
.catch((err) => console.log(err));
