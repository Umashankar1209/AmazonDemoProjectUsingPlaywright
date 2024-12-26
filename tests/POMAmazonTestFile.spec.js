import { MainPage } from "../POMAmazonProject/MainPage";
import { Cart } from "../POMAmazonProject/Cart";
import { BestSellers } from "../POMAmazonProject/BestSellers";
import { test, expect } from "@playwright/test";

test("Print all links", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  // Initialize the main page
  const mainPage = new MainPage(page);

  // Navigate to the main page
  await mainPage.navigateToURL();

  // Print all links on the main page
  await mainPage.printAllLinks();

  await page.close();
});
test.only("orderplacing best sellers products", async ({ browser }) => {
  test.slow()
    const context = await browser.newContext();
    const page = await context.newPage();

    const mainPage = new MainPage(page);
    await mainPage.navigateToURL();
    await mainPage.ClickOnBestSellerPage();

    const bestSellers = new BestSellers(page);
    const cart = new Cart(page);

    const sectionAction = async (sectionFn) => {
        try {
            await sectionFn();
            await cart.clickAddToCartButton();
            
            if (!page.isClosed()) {
                await page.goBack();
                await page.goBack();
            }
            await page.waitForTimeout(2000);
            await page.keyboard.press("Space");
        } catch (error) {
            console.error(`Error during section action: ${error}`);
        }
    };

    await sectionAction(() => bestSellers.firstProductInFirstSection());
    await sectionAction(() => bestSellers.firstProductInSecondSection());
    await sectionAction(() => bestSellers.firstProductInThirdSection());
    await sectionAction(() => bestSellers.firstProductInFourthSection());
    
    // If you want to include the fifth and sixth sections, you can uncomment the following:
    // await sectionAction(() => bestSellers.FirstProductInFivthSection());
    // await sectionAction(() => bestSellers.FirstProductInSixthSection());
});
