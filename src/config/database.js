const mongoose = require('mongoose');


async function conectarBanco() {

  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: process.env.MONGODB_DB,
    serverSelectionTimeoutMS: 10000});

  console.log('MongoDB conectado com sucesso!');
  console.log('Banco:', mongoose.connection.name);

}

module.exports = conectarBanco;