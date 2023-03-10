const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const config = require('./config');
const User = require("./models/User");

const run = async () => {
  await mongoose.connect(config.mongo.db);

  const collections = await mongoose.connection.db.listCollections().toArray();

  for (const coll of collections) {
    await mongoose.connection.db.dropCollection(coll.name);
  }
  const [admin, user] = await User.create({
    email: 'admin@gmail.com',
    password: 'admin',
    token: nanoid(),
    role: 'admin',
    username: 'Admin',
    image: 'http://localhost:8000/fixtures/admin.jpg',
    confirmationCode: 'dwadadwadawwd33a455dwadg',
  }, {
    email: 'user@mail.ru',
    password: 'user',
    token: nanoid(),
    role: 'user',
    username: 'User',
    image: 'http://localhost:8000/fixtures/user.png',
    confirmationCode: 'dwadadwadawwd33a455dwada',
  });

  await mongoose.connection.close();
};

run().catch(console.error);