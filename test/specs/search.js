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

        const dropdown = $("#a-autoid-0-announce")
        await dropdown.click();

    });

    it('finds blu-ray and scrolls down, and clicks on item', async () => {
        const title = $('=The Lord of the Rings: Motion Picture Trilogy Blu-ray');
        await title.scrollIntoView();
        await browser.pause(3000);
        await title.click();
    })

    it('verified price', async () => {
        if $(>'$100')
    })

    it('takes a screenshot', async () => {
        await browser.pause(3000);
        await browser.saveScreenshot('./screenshots/test1.png')
    })

    it('adds to shopping cart', async () => {
        const amazonAddToCart = $('#add-to-cart-button');

        amazonAddToCart.click();
    });
