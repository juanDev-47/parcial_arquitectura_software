const mongoose = require('mongoose');

// Conexión a la base de datos mongo
module.exports = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/hospital', {
    useNewUrlParser: true,
  })
    .then(() => console.log(`Mongo connected on mongodb local`))
    .catch((err) => console.log(`Connection has error ${err}`));
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongo is disconnected');
      process.exit(0);
    });
  });
};