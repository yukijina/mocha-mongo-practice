const mongoose = require('mongoose');

// find mongo database in my local machine
// mongodb connects with users_test
mongoose.connect('mongodb://localhost/users_test', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection
//watch mongo to 'open'
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
  console.warn('Warning', error)
  })

  beforeEach(() => {
    mongoose.connection.collections.users.drop();
  });