let express = require('express');

let bodyParser = require('body-parser');

let cors = require('cors');

let mongoose = require('mongoose');

let app = express();


let apiRoutes = require("./routes/juego.route");

let dataBaseConfig = require('./db/db');




app.use(cors());

mongoose.connect(dataBaseConfig.db, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;

if (!db)
    console.log("Error conectando db")
else
    console.log("Db conectada con exito")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('tutorial backend mision tic'));

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function() {
    console.log("corriendo backend del  api en el puerhjfghfjghto " + port);
});