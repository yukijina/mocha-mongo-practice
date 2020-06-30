const mongoose = require('mongoose');

// ES6 promises
mongoose.Promise = global.Promise;

// before only calls through entire test
before((done) => {
  // find mongo database in my local machine
  // mongodb connects with users_test
  mongoose.connect('mongodb://localhost/users_test', { useUnifiedTopology: true, useNewUrlParser: true });
  mongoose.connection
  //watch mongo to 'open' - once connection is done, go to next test
    .once('open', () => done())
    .on('error', (error) => {
    console.warn('Warning', error)
    })
})
  
  beforeEach((done) => {
    // it runs when users did all collections
    mongoose.connection.collections.users.drop(() => {
      // done - Ready to run the next test!
      done()
    });
  });


  /// FYI, you can change package.json script test as follows (automate with nodemon)
  // "test": "nodemon --exec 'mocha -R min'"