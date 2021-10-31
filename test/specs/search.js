describe('Amazon Product Search', () => {
    it('opens amazon and verifies the title', async () => {
        browser.url('https://www.amazon.com/')
        await expect(browser).toHaveTitle(
            'Amazon.com. Spend less. Smile more.'
        )
    });

    it('searches for a product and verifies the value', async () => {
        const amazonSearchInput = $('#twotabsearchtextbox');
        const amazonSearchBtn = $('#nav-search-submit-button');

        amazonSearchInput.addValue('lord of the rings bluray');
        amazonSearchBtn.click();

        await expect (amazonSearchInput).toHaveValue('lord of the rings bluray');
    });

    it('redirects to a new page and verifies the title', async () => {
        await expect(browser).toHaveTitle(
            'Amazon.com : lord of the rings bluray'
            )
    });

    it('changes department', async () => {
        const link = await $('=Sort by:')
        const selectBox = await $('#selectbox');
        const value = await selectBox.getValue();
        console.log(value); // returns "someValue0"
    
        await selectBox.selectByAttribute('value', 'someValue3');
        console.log(await selectBox.getValue()); // returns "someValue3"
    
        await selectBox.selectByAttribute('name', 'someName5');
        console.log(await selectBox.getValue()); // returns "someValue5"
    });
    });

    // it('updates the search category', async () =>)
})

// const selectBox = await $('#selectbox');
// const value = await selectBox.getValue();
// console.log(value); // returns "someValue0"

// await selectBox.selectByAttribute('value', 'someValue3');
// console.log(await selectBox.getValue()); // returns "someValue3"

// await selectBox.selectByAttribute('name', 'someName5');
// console.log(await selectBox.getValue()); // returns "someValue5"
// });