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

  // Initialize the main page
  const mainPage = new MainPage(page);

  // Navigate to the main page
  await mainPage.navigateToURL();

  // Navigate to the Best Seller product and proceed to the cart page
  await mainPage.ClickOnBestSellerPage();

  // Add to cart all the 1st product in each section
  const bestSellers = new BestSellers(page);

  // Initialize the cart page with the product page
  const cart = new Cart(page);
   
  await bestSellers.firstProductInHomeImprovement()
  await cart.clickAddToCartButton();
  await page.goBack()
  await page.goBack()
  await page.keyboard.press("Space")

  await bestSellers.firstProductInHomeAndKitchen()
  await cart.clickAddToCartButton();
  await page.goBack()
  await page.goBack()
  await page.waitForTimeout(2000)
  await page.keyboard.press("Space")

  await bestSellers.firstProductInCarAndMotorBike()
  await cart.clickAddToCartButton();
  await page.goBack()
  await page.goBack()
  await page.waitForTimeout(2000)
  await page.keyboard.press("Space")

  await bestSellers.firstProductInClothingAndAccessories()
  await cart.clickAddToCartButton();
  await page.goBack()
  await page.goBack()
  await page.waitForTimeout(2000)
  await page.keyboard.press("Space")

/* await bestSellers.FirstProductInBeauty()
  await cart.clickAddToCartButton();
  await page.goBack()
  await page.goBack()
  await page.waitForTimeout(2000)
  await page.keyboard.press("Space")

  await bestSellers.FirstProductInElectronics()
  await cart.clickAddToCartButton();

*/
  // Assertion to check if the product is successfully added to the cart
  await expect(productPage).toHaveURL(/.*cart/); // Check if we're on the cart page
});
