exports.BestSellers=
class BestSellers
{
    constructor(page) {
        this.page = page;
        this.ProductInFirstSection = "(//div[@id='anonCarousel1']//li[@aria-posinset='1']//a)[1]";
        this.ProductInSecondSection = "(//div[@id='anonCarousel2']//li[@aria-posinset='1']//a)[1]";
        this.ProductInThirdSection = "(//div[@id='anonCarousel3']//li[@aria-posinset='1']//a)[1]";
        this.ProductInFourthSection = "(//div[@id='anonCarousel4']//li[@aria-posinset='1']//a)[1]";
        this.ProductInFifthSection = "(//div[@id='anonCarousel5']//li[@aria-posinset='1']//a)[1]";
        this.ProductInSixthSection = "(//div[@id='anonCarousel6']//li[@aria-posinset='1']//a)[1]";
    }

    // Refactor to reduce redundancy
    async selectFirstProductInSection(sectionLocator) {
        try {
            await this.page.waitForSelector(sectionLocator, { state: 'visible', timeout: 5000 });
            const value = this.page.locator(sectionLocator).textContent();
            console.log(value)
            /*if(value.includes('Card'))
            {
                return;
            }*/
            const isProductVisible = await this.page.isVisible(sectionLocator);
            if (isProductVisible) {
                await this.page.locator(sectionLocator).hover();
                await this.page.locator(sectionLocator).click();
            } else {
                console.log(`Product in the section is not visible.`);
            }
        } catch (error) {
            console.error(`Error interacting with the product in the section: ${error}`);
        }
    }

    async firstProductInFirstSection() {
        await this.selectFirstProductInSection(this.ProductInFirstSection);
    }

    async firstProductInSecondSection() {
        await this.selectFirstProductInSection(this.ProductInSecondSection);
    }

    async firstProductInThirdSection() {
        await this.selectFirstProductInSection(this.ProductInThirdSection);
    }

    async firstProductInFourthSection() {
        await this.selectFirstProductInSection(this.ProductInFourthSection);
    }

    async firstProductInFifthSection() {
        await this.selectFirstProductInSection(this.ProductInFifthSection);
    }

    async firstProductInSixthSection() {
        await this.selectFirstProductInSection(this.ProductInSixthSection);
    }
}

