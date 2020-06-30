// in package.json file, change script test to "mocha"

// assertion - boolean
const assert = require('assert');
const User = require('../src/user');

// describe takes 1st string and 2nd argument function
describe('Creating records', () => {
  // it takes 1st string and 2nd argument function
  it('saves a user', (done) => {
    //if assert is correct, test passes
    //assert(1+1 === 2)
    const joe = new User({ name: 'Joe'});

    joe.save()
    .then(() => {
      // Has joe been saved successfully?
      assert(!joe.isNew);
      done()
    });
  });

});