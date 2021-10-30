describe('Amazon Product Search', () => {
    it('should open amazon and verify the title', async () => {
        browser.url('https://www.amazon.com/')
        await expect(browser).toHaveTitle(
            'Amazon.com. Spend less. Smile more.'
        )
    });
})