import express from 'express';
import bodyParser from 'body-parser';
import connectMongo from './src/mongodb/connectToMongo';

const app = express();
const http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '10000000mb' }));
app.use(express.json());
app.use(express.static('public'));

connectMongo(db => {
  /*
    FUNCTION ABOUT CRUD GOES HERE
    C -> Create
    R -> Remove
    U -> Update
    D -> Delete
  */
});

const PORT = 3001;
http.listen(PORT, () => {
  console.log(`Production Express server running at localhost: ${PORT}`);
});
