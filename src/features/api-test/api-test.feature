Feature: Get API Test
    
Scenario: Validate API UP & Running
      Given I send a get request to api "https://jsonplaceholder.typicode.com/posts"
      Then I expect response code is 200