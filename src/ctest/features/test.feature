Feature: MS Demo Test

Scenario: MS test scenario 1 - - verify valid search - results found
Given go to "http://www.marksandspencer.com/"
When search for "Socks"
Then verify found items
#Then verify found "Socks"

Scenario: MS test scenario 2 - verify valid search - results found
Given go to "http://www.marksandspencer.com/"
When search for "shoes"
Then verify found items

Scenario: MS test scenario 3 - verify invalid search - no results
Given go to "http://www.marksandspencer.com/"
When search for "asasasa"
Then verify not found items

Scenario: MS test scenario 4 - verify successful login
Given go to "http://www.marksandspencer.com/"
When sign-in with credentials: "mstest@mailinator.com" "test1234"
Then verify log in: "test"

Scenario: MS test scenario 5 - verify failed login
Given go to "http://www.marksandspencer.com/"
When sign-in with credentials: "test@mailinator.com" "test1234"
Then verify log in failed

