
exports.Cart =
class Cart
{
    constructor(page) {
        this.page = page;
        this.addToCartButton = "//input[@id='add-to-cart-button']";
        this.freshAddToCartButton = "//input[@aria-labelledby='freshAddToCartButton-announce']";
        this.CardAddToCartButton = "//span[@id='a-autoid-0']";
    }
    
    async clickAddToCartButton() {
        try {
            // Check if the Add to Cart button is visible
            const isAddToCartButtonVisible = await this.page.isVisible(this.addToCartButton);
            
            if (isAddToCartButtonVisible) {
                // Click the Add to Cart button if visible
                await this.page.locator(this.addToCartButton).click();
                console.log("Product added to cart using Add to Cart button.");
            } else {
                // If Add to Cart button is not visible, check for Fresh Add to Cart button
                const isFreshAddToCartButtonVisible = await this.page.isVisible(this.freshAddToCartButton);
                
                if (isFreshAddToCartButtonVisible) {
                    // Click the Fresh Add to Cart button if visible
                    await this.page.locator(this.freshAddToCartButton).click();
                    console.log("Product added to cart using Fresh Add to Cart button.");
                } else {
                    // If neither the Add to Cart nor Fresh Add to Cart button is visible, check for Card Add to Cart button
                    const isCardAddToCartButtonVisible = await this.page.isVisible(this.CardAddToCartButton);
                    
                    if (isCardAddToCartButtonVisible) {
                        // Click the Card Add to Cart button if visible
                        await this.page.locator(this.CardAddToCartButton).click();
                        console.log("Product added to cart using Card Add to Cart button.");
                    } else {
                        console.log("No Add to Cart button found. Skipping to the next step.");
                    }
                }
            }
        } catch (error) {
            // Log any errors and skip the current product
            console.log("Error interacting with the product. Skipping to the next one...");
            console.error(error);
        }
        
        // Wait for 2 seconds after the interaction
        await this.page.waitForTimeout(2000);
    }
        
}