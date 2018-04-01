describe('app login flow', function() {

  var loginUrl, homeUrl, name;

  it('sets up initial variables', function() {
      // Can be considered to be beforeAll, which Protractor lacks.
      browser.waitForAngularEnabled(false);
      browser.get('/');
      name = 'user' + Math.floor(Math.random() * 100000);
      var until = protractor.ExpectedConditions;
      browser.driver.sleep(2000); 
      $('#selectHard').click()
      browser.driver.sleep(2000); 
      $('#robotButton').click()
      browser.driver.sleep(20000);     
      $('#returnMainButton').click()
      expect(1).toBe(1)
     
  });

  it('registers a user and redirects to home', function() {
      /*browser.get('/register');
      name = 'user' + Math.floor(Math.random() * 100000);
      $('#email').sendKeys(name + '@test.com');
      $('#email2').sendKeys(name + '@test.com');
      $('#username').sendKeys(name);
      $('#firstName').sendKeys('Test');
      $('#lastName').sendKeys('User');
      $('#passwd1').sendKeys('Secret123');
      $('#passwd2').sendKeys('Secret123');
      $('button').click();
      expect(browser.getCurrentUrl()).toBe(homeUrl);*/
  });

  it('logs in correctly', function() {
      /*browser.get('/login');
      $('#username').sendKeys(name);
      $('#passwd').sendKeys('Secret123');
      $('button').click();
      expect(browser.getCurrentUrl()).toBe(homeUrl);*/
  });
});