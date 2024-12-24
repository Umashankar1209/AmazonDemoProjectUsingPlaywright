import { expect } from '@playwright/test';
exports.MainPage = class MainPage {
    constructor(page) {
        this.page = page;
        this.mainPageURL = "https://www.amazon.in/";
        this.allLinks = 'a';
        this.allButton = "//i[@class='hm-icon nav-sprite']";
        this.bestSellerButton = "//ul[@class='hmenu hmenu-visible']//a[@class='hmenu-item'][normalize-space()='Best Sellers']";
        
    }

    // Navigate to the main page
    async navigateToURL() {
        await this.page.goto(this.mainPageURL);
        await expect(this.page).toHaveURL(this.mainPageURL);
    }

    // Print all link texts on the page
    async printAllLinks() {
        const allLinks = await this.page.locator(this.allLinks);
        const count = await allLinks.count();

        console.log(`Total links found: ${count}`);
        for (let i = 0; i < count; i++) {
            const linkText = await allLinks.nth(i).textContent();
            console.log(linkText);
        }
    }

    // Place an order for the first Best Seller product
    async ClickOnBestSellerPage()
    {
        await this.page.waitForSelector(this.allButton);
        await this.page.locator(this.allButton).click();
        await this.page.locator(this.bestSellerButton).click();
    }
    
};