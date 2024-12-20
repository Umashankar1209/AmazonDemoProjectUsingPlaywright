const { CartPage } = require("./CartPage");

exports.Mainpage = 
class MainPage
{
    constructor(page)
    {
        this.page=page;
        this.mainpageURL="https://www.amazon.in/"
        this.links ='//a'
        this.allbutton="//i[@class='hm-icon nav-sprite']"
        this.bestsellerbutton="//ul[@class='hmenu hmenu-visible']//a[@class='hmenu-item'][normalize-space()='Best Sellers']"
        this.firstproductinhomeimprovement="//div[@id='anonCarousel1']//li[@aria-posinset='1']"
    }
    async navigateToURL()
    {
        await this.page.goto(this.mainpageURL);
    }

    async PrintAllLinks()
{
    const alllinks = await this.page.locator(this.links);
        const count = await alllinks.count(); // Get the number of links

        for (let i = 0; i < count; i++)
        {
            const linkText = await alllinks.nth(i).textContent(); // Access each link by index
            console.log(linkText); // Print the link text
        }
    //await this.page.close();
}
//Placing an order for the first product in all "Best Seller" sections.
async OrderPlacingBestSellerProducts()
{
     await this.page.waitForSelector(this.allbutton);
      await this.page.locator(this.allbutton).click();
      await this.page.locator(this.bestsellerbutton).click();
      //bestseller in home improvement
      await this.page.locator(this.firstproductinhomeimprovement).click();
      await this.page.locator(this.CartPage)
      
}
}




