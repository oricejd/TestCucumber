$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ctest/features/test.feature");
formatter.feature({
  "line": 1,
  "name": "MS Demo Test",
  "description": "",
  "id": "ms-demo-test",
  "keyword": "Feature"
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
  "duration": 92614508,
  "error_message": "java.lang.NullPointerException\r\n\tat ctest.features.StepDefinitions.goToUrl(Unknown Source)\r\n\tat ✽.Given go to \"http://www.marksandspencer.com/\"(ctest/features/test.feature:4)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.verifyFoundItems()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 222948,
  "error_message": "java.lang.NullPointerException\r\n\tat ctest.features.StepDefinitions.goToUrl(Unknown Source)\r\n\tat ✽.Given go to \"http://www.marksandspencer.com/\"(ctest/features/test.feature:10)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.verifyFoundItems()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 225514,
  "error_message": "java.lang.NullPointerException\r\n\tat ctest.features.StepDefinitions.goToUrl(Unknown Source)\r\n\tat ✽.Given go to \"http://www.marksandspencer.com/\"(ctest/features/test.feature:15)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.verifyNotFoundItems()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 214681,
  "error_message": "java.lang.NullPointerException\r\n\tat ctest.features.StepDefinitions.goToUrl(Unknown Source)\r\n\tat ✽.Given go to \"http://www.marksandspencer.com/\"(ctest/features/test.feature:20)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "duration": 226655,
  "error_message": "java.lang.NullPointerException\r\n\tat ctest.features.StepDefinitions.goToUrl(Unknown Source)\r\n\tat ✽.Given go to \"http://www.marksandspencer.com/\"(ctest/features/test.feature:25)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.verifyLoginFailed()"
});
formatter.result({
  "status": "skipped"
});
});