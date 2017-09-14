Feature: Hello
  As a user
  I want to be greeted when I open the app
  So I feel happy

  Scenario: User sees the welcome message
    When I open the app
    Then I should see the welcome message saing 'Hi.'