// Initialization mongodb
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/camaras_db_mongodb', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}, console.log('trying to connect to database.........'))
  .then(db => console.log('Database: connection successful!'))
  .catch(err => console.error(err));

module.exports = mongoose;
