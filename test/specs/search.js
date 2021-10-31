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

    it('changes sorting method by avg review', async () => {
        // const selectBox = await $('#a-autoid-0-announce')
        // const avgReview = await selectBox.selectByAttribute('stringVal', 'review-ran');
        // const aveReview2 = await selectBox.click('[stringVal="review-ran"]');
        const dropdown = $("#a-autoid-0-announce")
        await dropdown.click();

        // const openedDropdown = $('#a-popover-3').selectByVisibleText("Avg. Customer Review")
        // const openedDropdown = $('#a-popover-3').selectByIndex(2)
        // await openedDropdown.click();

        // $("#dropdown").selectByIndex(0)
    });

    it('scrolls down', async () => {
        const title = await document.getElementById('The Lord of the Rings: Motion Picture Trilogy Blu-ray')
        await title.scrollIntoView()
    })
});

    // it('updates the search category', async () =>)
// })

// const selectBox = await $('#selectbox');
// const value = await selectBox.getValue();
// console.log(value); // returns "someValue0"

// await selectBox.selectByAttribute('stringVal', 'review-ran');
// console.log(await selectBox.getValue()); // returns "someValue3"

// await selectBox.selectByAttribute('name', 'someName5');
// console.log(await selectBox.getValue()); // returns "someValue5"
// });

// data-value="{"stringVal":"review-rank"}"