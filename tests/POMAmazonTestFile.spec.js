import { MainPage } from "../POMAmazonProject/MainPage";
import { Cart } from "../POMAmazonProject/Cart";
import { BestSellers } from "../POMAmazonProject/BestSellers";
import { test, expect } from "@playwright/test";
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

// Common Test Configuration
test.use({
    viewport: { width: 1600, height: 1200 },
});

// Test 1: Print all links on the main page
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

// Test 2: Order placing for best sellers products
test("Order placing best sellers products", async ({ browser }) => {
    test.slow(); // Slow down the test execution if needed

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
            await page.waitForTimeout(2000); // Wait for some time to simulate real user interaction
            await page.keyboard.press("Space");
        } catch (error) {
            console.error(`Error during section action: ${error}`);
        }
    };

    // Order placing from different sections
    await sectionAction(() => bestSellers.firstProductInFirstSection());
    await sectionAction(() => bestSellers.firstProductInSecondSection());
    await sectionAction(() => bestSellers.firstProductInThirdSection());
    await sectionAction(() => bestSellers.firstProductInFourthSection());

    // Optional: If you want to include the fifth and sixth sections
    // await sectionAction(() => bestSellers.FirstProductInFivthSection());
    // await sectionAction(() => bestSellers.FirstProductInSixthSection());

    await page.close();
});

// Test 3: Data-Driven Amazon Account Login Test
const records = parse(
    fs.readFileSync(path.join(__dirname, "../TestData_QA/TestData.csv")),
    {
        columns: true,
        skip_empty_lines: true
    }
);

test.describe("Amazon Login Tests", () => {
    records.forEach((record) => {
        test.only(`Data Driven test for amazonAccount login ${record.TestCaseId}`, async ({ page }) => {
            const mainPage = new MainPage(page);

            // Navigate to the main page
            await mainPage.navigateToURL();
            await page.waitForSelector("//span[text()='Account & Lists']");
            // Amazon login process
            await page.locator("//span[text()='Account & Lists']").click();
            //await page.waitForTimeout(2000);
            await page.waitForSelector("//*[@id='ap_email_login']");
            await page.click("//*[@id='ap_email_login']");
            await page.locator("//*[@id='ap_email_login']").fill(record.EmailID);
            await page.click(".a-button-input");
            await page.fill("#ap_password", record.Password);
            //await page.click("#signInSubmit");

            // Optional: Add assertions to verify successful login
            // await expect(page).toHaveURL('...');

            await page.close();
        });
    });
});
