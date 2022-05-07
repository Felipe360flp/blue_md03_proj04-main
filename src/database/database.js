const mongoose = require('mongoose');

const connectToDatabase = async () => {
    mongoose.connect(process.env.URI_DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('You are now connected to MongoDB Atlas!'))
        .catch((error) =>
            console.log(`Something went wrong when connecting to the database: ${error}`)
        );
};

module.exports = connectToDatabase;
