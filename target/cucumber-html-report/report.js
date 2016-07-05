$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ctest/features/test.feature");
formatter.feature({
  "line": 1,
  "name": "MS Demo Test",
  "description": "",
  "id": "ms-demo-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6678136722,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "MS test scenario 1 - - verify valid search - results found",
  "description": "",
  "id": "ms-demo-test;ms-test-scenario-1-----verify-valid-search---results-found",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "go to \"http://www.marksandspencer.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "search for \"Socks\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "verify found items",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.marksandspencer.com/",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.goToUrl(String)"
});
formatter.result({
  "duration": 7726512805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Socks",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.searchForItem(String)"
});
formatter.result({
  "duration": 240143017,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyFoundItems()"
});
formatter.result({
  "duration": 8510763815,
  "status": "passed"
});
formatter.after({
  "duration": 9569387,
  "status": "passed"
});
formatter.before({
  "duration": 3509417572,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Then verify found \"Socks\""
    }
  ],
  "line": 9,
  "name": "MS test scenario 2 - verify valid search - results found",
  "description": "",
  "id": "ms-demo-test;ms-test-scenario-2---verify-valid-search---results-found",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "go to \"http://www.marksandspencer.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "search for \"shoes\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "verify found items",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.marksandspencer.com/",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.goToUrl(String)"
});
formatter.result({
  "duration": 6008885717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shoes",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.searchForItem(String)"
});
formatter.result({
  "duration": 229170938,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyFoundItems()"
});
formatter.result({
  "duration": 9758918148,
  "status": "passed"
});
formatter.after({
  "duration": 7363282,
  "status": "passed"
});
formatter.before({
  "duration": 4650485996,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "MS test scenario 3 - verify invalid search - no results",
  "description": "",
  "id": "ms-demo-test;ms-test-scenario-3---verify-invalid-search---no-results",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "go to \"http://www.marksandspencer.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "search for \"asasasa\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "verify not found items",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.marksandspencer.com/",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.goToUrl(String)"
});
formatter.result({
  "duration": 5619425471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asasasa",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.searchForItem(String)"
});
formatter.result({
  "duration": 195112300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.verifyNotFoundItems()"
});
formatter.result({
  "duration": 10374807807,
  "status": "passed"
});
formatter.after({
  "duration": 9099257,
  "status": "passed"
});
formatter.before({
  "duration": 3325223469,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "MS test scenario 4 - verify successful login",
  "description": "",
  "id": "ms-demo-test;ms-test-scenario-4---verify-successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "go to \"http://www.marksandspencer.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "sign-in with credentials: \"mstest@mailinator.com\" \"test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "verify log in: \"test\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.marksandspencer.com/",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.goToUrl(String)"
});
formatter.result({
  "duration": 5502835464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mstest@mailinator.com",
      "offset": 27
    },
    {
      "val": "test1234",
      "offset": 51
    }
  ],
  "location": "StepDefinitions.verifyNotFound(String,String)"
});
formatter.result({
  "duration": 14487498785,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[title\u003d\u0027iframe content\u0027]\"}\nCommand duration or timeout: 10.08 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593c\u0027, time: \u00272016-02-11 19:06:42\u0027\nSystem info: host: \u0027APOPA-RO-PC\u0027, ip: \u002710.249.130.209\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b65e47e9-b0bc-4096-8e1b-911998e79c61\n*** Element info: {Using\u003dcss selector, value\u003diframe[title\u003d\u0027iframe content\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat selenium.WebDriverDelegate.findElement(Unknown Source)\r\n\tat page.objects.Page.switchToLoginiFrame(Unknown Source)\r\n\tat ctest.features.StepDefinitions.verifyNotFound(Unknown Source)\r\n\tat ✽.When sign-in with credentials: \"mstest@mailinator.com\" \"test1234\"(ctest/features/test.feature:21)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[title\u003d\u0027iframe content\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593c\u0027, time: \u00272016-02-11 19:06:42\u0027\nSystem info: host: \u0027APOPA-RO-PC\u0027, ip: \u002710.249.130.209\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/apopa/AppData/Local/Temp/anonymous3497258549446627653webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10723)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/apopa/AppData/Local/Temp/anonymous3497258549446627653webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:623)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.verifySignInAnsName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11711061,
  "status": "passed"
});
formatter.before({
  "duration": 3395337585,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "MS test scenario 5 - verify failed login",
  "description": "",
  "id": "ms-demo-test;ms-test-scenario-5---verify-failed-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "go to \"http://www.marksandspencer.com/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "sign-in with credentials: \"test@mailinator.com\" \"test1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "verify log in failed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.marksandspencer.com/",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.goToUrl(String)"
});
formatter.result({
  "duration": 4801575692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@mailinator.com",
      "offset": 27
    },
    {
      "val": "test1234",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.verifyNotFound(String,String)"
});
formatter.result({
  "duration": 14199412180,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[title\u003d\u0027iframe content\u0027]\"}\nCommand duration or timeout: 10.69 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593c\u0027, time: \u00272016-02-11 19:06:42\u0027\nSystem info: host: \u0027APOPA-RO-PC\u0027, ip: \u002710.249.130.209\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d43.0.1, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 961f5ba2-7d09-4fad-b729-2b754b88e66b\n*** Element info: {Using\u003dcss selector, value\u003diframe[title\u003d\u0027iframe content\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:492)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat selenium.WebDriverDelegate.findElement(Unknown Source)\r\n\tat page.objects.Page.switchToLoginiFrame(Unknown Source)\r\n\tat ctest.features.StepDefinitions.verifyNotFound(Unknown Source)\r\n\tat ✽.When sign-in with credentials: \"test@mailinator.com\" \"test1234\"(ctest/features/test.feature:26)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"iframe[title\u003d\u0027iframe content\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593c\u0027, time: \u00272016-02-11 19:06:42\u0027\nSystem info: host: \u0027APOPA-RO-PC\u0027, ip: \u002710.249.130.209\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_92\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/apopa/AppData/Local/Temp/anonymous4443663111120345130webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10723)\r\n\tat \u003canonymous class\u003e.fxdriver.Timer.prototype.setTimeout/\u003c.notify(file:///C:/Users/apopa/AppData/Local/Temp/anonymous4443663111120345130webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:623)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinitions.verifyLoginFailed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 16586843,
  "status": "passed"
});
});