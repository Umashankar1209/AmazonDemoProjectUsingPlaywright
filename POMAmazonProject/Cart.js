exports.Cart =
class Cart
{
    constructor(page) {
        this.page = page;
        this.addToCartButton = "//input[@id='add-to-cart-button']";
    }
  
    // Add the product to the cart
    async clickAddToCartButton() {
        await this.page.waitForSelector(this.addToCartButton);
        await this.page.locator(this.addToCartButton).click();
        await this.page.waitForTimeout(2000)
    }
}