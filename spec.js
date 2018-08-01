describe('Sample application::', function() {
  it('the text should match "hello <name>"', function() {
    browser.get('https://angularjs.org/');
    browser.sleep(5); // sleep is added only for demo purposes
    element(by.model('yourName')).sendKeys('Anisha');
    browser.sleep(10); // sleep is added only for demo purposes

    expect(element(by.binding('yourName')).getText()).toEqual('Hello Anisha!');
  });
});
