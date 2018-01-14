import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

const connectMongo = callback => {
  MongoClient.connect(url, (err, client) => {
    if (err) throw new Error('Error when connecting to mongoDB');

    const db = client.db('matcha');

    console.log('Connected to mongoDB');
    callback(db);
  });
};

export default connectMongo;
