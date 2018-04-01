describe('app login flow', function() {

    var originalTimeout;
    beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
    });


    it('Start game with human in normal difficult 10 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select normal difficult
        $('#selectNormal').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);

        // Humand get 10 correct answers(Timeout)
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()
     
    });

    it('Start game with human in easy difficult 10 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select Easy difficult
        $('#selectEasy').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);

        // Humand get 10 correct answers(Timeout)
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()
     
    });

    it('Start game with human in hard difficult 10 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select hard difficult
        $('#selectHard').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);

        // Humand get 10 correct answers(Timeout)
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()
     
    });


    it('Start game with human in hard difficult 5 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select hard difficult
        $('#selectHard').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 5 correct answers
        expect($('#scoreAnswers').getText()).toBe('5')  
        
        // Back to main menu   
        $('#returnMainButton').click()
     
    });

    it('Start game with human in easy difficult 5 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select easy difficult
        $('#selectEasy').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 5 correct
        expect($('#scoreAnswers').getText()).toBe('5')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with human in normal difficult 5 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select normal difficult
        $('#selectNormal').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".goodSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 5 correct answers
        expect($('#scoreAnswers').getText()).toBe('5')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with human in hard difficult 0 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select hard difficult
        $('#selectHard').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 0 correct answers
        expect($('#scoreAnswers').getText()).toBe('0')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with human in normal difficult 0 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select normal difficult
        $('#selectNormal').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 0 correct answers
        expect($('#scoreAnswers').getText()).toBe('0')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with human in easy difficult 0 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select easy difficult
        $('#selectEasy').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);
        
        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(500);
        let colorSelected = $('#questionLabel').getText()
        
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);
        $(".badSolution").click();
        browser.driver.sleep(500);

        // Humand get 0 correct answers
        expect($('#scoreAnswers').getText()).toBe('0')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with human in normal difficult 0 correct answer', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select normal difficult
        $('#selectNormal').click()
        browser.driver.sleep(2000); 

        // Press button of human
        $('#humanButton').click()
        browser.driver.sleep(2000);

        // Press start button
        $('#startGameButton').click();
        browser.driver.sleep(35000);

        // Humand get 0 correct answers(Timeout)
        expect($('#scoreAnswers').getText()).toBe('0')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    it('Start game with robot in hard difficult', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select hard difficult
        $('#selectHard').click()
        browser.driver.sleep(2000); 

        // Press button of robot
        $('#robotButton').click()
        browser.driver.sleep(10000);

        // Robot get 10 correct answers
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()
        //expect($('#robotButton').getLength()).toBe(1)
     
    });

    it('Start game with robot in easy difficult', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select easy difficult
        $('#selectEasy').click()
        browser.driver.sleep(2000); 

        // Press button of robot
        $('#robotButton').click()
        browser.driver.sleep(35000);

        // Robot get 10 correct answers
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });


    it('Start game with robot in normal difficult', function() {
        browser.waitForAngularEnabled(false);
        browser.get('/');
        // Load the app
        browser.driver.sleep(2000); 

        // Select normal difficult
        $('#selectNormal').click()
        browser.driver.sleep(2000); 

        // Press button of robot
        $('#robotButton').click()
        browser.driver.sleep(20000);

        // Robot get 10 correct answers
        expect($('#scoreAnswers').getText()).toBe('10')  
        
        // Back to main menu   
        $('#returnMainButton').click()     
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
      });
});