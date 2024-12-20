import { Mainpage } from "../POMAmazonProject/MainPage";
import{test,expect} from '@playwright/test';

test("POM",async ({page})=>
{
    const mainpage = new Mainpage(page)
    await mainpage.navigateToURL();
    await mainpage.PrintAllLinks();
    await mainpage.OrderPlacingBestSellerProducts();

  
})