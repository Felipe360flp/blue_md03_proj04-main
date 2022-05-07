require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/database/database');
const characterRoute = require('./src/characters/character.route');
const authRoute = require("./src/auth/auth.routes");
const userRoute = require("./src/users/users.routes");
const app = express();

const port = process.env.PORT || 5000;

connectToDatabase();
app.use(express.json());
app.use(cors());
app.use('/characters', characterRoute);
app.use("/auth", authRoute);
app.use("/users", userRoute);


app.listen(port, () => console.log(`App running port ${port}`));
