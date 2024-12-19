exports.Mainpage = 
class MainPage
{
    constructor(page)
    {
        this.page=page;
        this.links ='//a'
    }
    async navigateToURL()
    {
        await this.page.goto('https://www.amazon.in/');
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
  
}
    async 
}




