Feature: MOT history API documentation


  Scenario: Verify the quota limits are displayed in the documentation
    Given I am on the MOT history API documentation homepage
    When I navigate to the "Rate limits" page
    Then I should see the heading "Rate limits"
    And the following rate limits should be displayed:
      | limit type | value  |
      | quota      | 500000 |
      | burst      | 10     |
      | rps        | 15     |


  Scenario: Verify reasons for rejection of API application are documented
    Given I am on the MOT history API documentation homepage
    When I navigate to the "Get support" page
    And I navigate to the anchor "Why was my API application rejected?"
    Then the page should list the following rejection reasons:
      | reason                                                                          |
      | no contact email provided                                                       |
      | a postal address that cannot be recognised                                      |
      | an organisation, business or individual already being registered to use the API |


  Scenario: Verify that users can navigate back to previous pages or the homepage without issues
    Given I am on the "Error codes" page
    When I click the "MOT history API" breadcrumb link
    Then I should be taken to the MOT history API homepage
    When I use the browser back button
    Then I should be taken back to the "Error codes" page


  Scenario: Verify error code MOTH-NP-01 is present and correctly described
    Given I am on the MOT history API documentation homepage
    When I navigate to the "Error codes" page
    Then I should see the heading "Error codes"
    And the following error codes should be displayed:
      | code       | description                                                   |
      | MOTH-NP-01 | DVLA ID is required but has not been provided in the request |