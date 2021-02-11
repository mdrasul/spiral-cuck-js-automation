Feature: Google Search
    
Scenario: Validate Result-Page Title contains search keyword
      Given I open the url "http://google.com"
      When I perform a search for "ducks" on google home page
      Then I expect that the title is "ducks - Google Search"
      Then I expect that the result is not "0"
     ####Then I expect that the result is "505000000077"  ## Tested for positive validation
     Then I expect all result item contains "duck"