describe('Angular Sample application::', function() {
  it('The resulting text should match "Hello Anisha!"', function() {
    browser.get('https://angularjs.org/');
    //browser.sleep(5); // sleep is added only for demo purposes
    element(by.model('yourName')).sendKeys('Anisha');
    browser.sleep(15); // sleep is added only for demo purposes

    expect(element(by.binding('yourName')).getText()).toEqual('Hello Anisha!');
  });
});
