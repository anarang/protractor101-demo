'use strict';

var jasmineSpecReporter = require('jasmine-spec-reporter');
var jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var browserLogs = require('protractor-browser-logs');

// The html reports for the test will be available in reports/ and
// screenshots in reports/screenshots for the failing tests
var addHtmlReporter = function() {
  jasmine.getEnv().addReporter(
    new jasmine2HtmlReporter({
      savePath: 'reports',
      screenshotsFolder: 'screenshots',
      takeScreenshotsOnlyOnFailures: true,
      fixedScreenshotName: true,
      fileName: 'PantheonTestReport'
    })
  );
};

// Jasmine Spec reporter for descriptive test logging on the console instead of green dots.
var addJasmineSpecReporter = function() {
  jasmine.getEnv().addReporter(
    new jasmineSpecReporter.SpecReporter({
      displayStacktrace: 'all'
    })
  );
};

// Protractor Browser Logs to identify any unexpected errors in the browser console logs.
var verifyBrowserConsoleLogs = function() {
  var logs = browserLogs(browser);

  beforeEach(function() {
    logs.reset();
  });

  afterEach(function() {
    return logs.verify();
  });
};

addHtmlReporter();
addJasmineSpecReporter();
verifyBrowserConsoleLogs();
