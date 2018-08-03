'use strict';

var angularHomepage = require('./pages/pageObjectFile');
describe('Angular Sample application::', function() {
  it('The resulting text should match "Hello Anisha!"', function() {
    angularHomepage.get();

    angularHomepage.setName('Anisha');

    expect(angularHomepage.getGreetingText()).toEqual('Hello Anisha!');
  });
});
