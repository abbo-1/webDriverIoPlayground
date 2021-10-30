const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });


describe('webdriver.io page', () => {
    it('should have the correct title', async () => {
        browser.url('https://webdriver.io/')
        await expect(browser).toHaveTitle(
            'WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO'
            );
    });
});

//describe('NAME_OF_YOUR_TEST_COLLECTION', 

//then comes a function, followed by an IT block. The it block is where your test is running. then your it function should have a name that tells you what you are trying to test.



